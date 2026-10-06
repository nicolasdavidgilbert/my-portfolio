import { defaultLocale, isLocale, STORAGE_KEY, type Locale } from '../i18n/config';
import { interpolate } from '../i18n/translate-core';
import type { FlatDictionary, TranslationKey, TranslationVars } from '../i18n/types';
import { emit } from './events';

/**
 * Browser side of i18n. The server renders the default locale; every translatable
 * node carries `data-i18n` (text) and/or `data-i18n-attr` (attributes). Switching
 * rewrites those nodes from the dictionaries embedded in the page: no reload, no network.
 */
const dictionaries: Partial<Record<Locale, FlatDictionary>> = JSON.parse(
  document.getElementById('i18n-dictionaries')?.textContent ?? '{}',
);

let current: Locale = defaultLocale;

export function getLocale(): Locale {
  return current;
}

export function translate(key: TranslationKey, vars?: TranslationVars, locale: Locale = current): string {
  const text = dictionaries[locale]?.[key] ?? dictionaries[defaultLocale]?.[key] ?? key;
  return interpolate(text, vars, (nested) => translate(nested, undefined, locale));
}

function readVars(element: Element): TranslationVars | undefined {
  const raw = element.getAttribute('data-i18n-vars');
  return raw ? (JSON.parse(raw) as TranslationVars) : undefined;
}

function applyTexts(locale: Locale): void {
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    element.textContent = translate(element.dataset.i18n as TranslationKey, readVars(element), locale);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((element) => {
    const vars = readVars(element);
    for (const pair of (element.dataset.i18nAttr ?? '').split('|')) {
      const [name, key] = pair.split(':');
      if (name && key) element.setAttribute(name, translate(key as TranslationKey, vars, locale));
    }
  });

  document.documentElement.lang = locale;
  document.querySelectorAll<HTMLButtonElement>('[data-locale-option]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.localeOption === locale));
  });
}

function store(locale: Locale): void {
  try {
    if (locale === defaultLocale) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the switch still works for this visit.
  }
}

export function setLocale(locale: Locale, { animate = true }: { animate?: boolean } = {}): void {
  if (locale === current) return;
  current = locale;
  const run = () => applyTexts(locale);
  // Listeners must see the new DOM, so announce the change only once the texts are in place
  // (a view transition runs its update callback asynchronously).
  const announce = () => emit(document, 'locale:change', { locale });
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (animate && !reduceMotion && 'startViewTransition' in document) {
    void document.startViewTransition(run).updateCallbackDone.then(announce);
  } else {
    run();
    announce();
  }
}

function storedLocale(): Locale | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isLocale(value) ? value : null;
  } catch {
    return null;
  }
}

/* ---------- boot ---------- */
const saved = storedLocale();
if (saved && saved !== defaultLocale) setLocale(saved, { animate: false });
document.documentElement.classList.remove('lang-pending');

document.querySelectorAll<HTMLElement>('[data-locale-toggle]').forEach((toggle) => {
  toggle.hidden = false;
  toggle.addEventListener('click', (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>('[data-locale-option]');
    const locale = button?.dataset.localeOption;
    if (!isLocale(locale)) return;
    setLocale(locale);
    store(locale);
  });
});
