import { defaultLocale, type Locale } from './config';
import { en } from './en';
import { es } from './es';
import { interpolate } from './translate-core';
import type { Dictionary, FlatDictionary, TranslationKey, TranslationVars } from './types';

function flatten(node: unknown, prefix = '', out: Record<string, string> = {}): Record<string, string> {
  if (typeof node === 'string') {
    out[prefix] = node;
  } else if (node && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) flatten(value, prefix ? `${prefix}.${key}` : key, out);
  }
  return out;
}

const sources: Record<Locale, Dictionary> = { en, es };

/** Every locale flattened to `{ 'dotted.key': 'text' }`; embedded in the page for client-side switching. */
export const flatDictionaries: Readonly<Record<Locale, FlatDictionary>> = {
  en: flatten(sources.en),
  es: flatten(sources.es),
};

export function t(key: TranslationKey, vars?: TranslationVars, locale: Locale = defaultLocale): string {
  const text = flatDictionaries[locale][key];
  if (text === undefined) throw new Error(`Missing translation "${key}" for locale "${locale}"`);
  return interpolate(text, vars, (nested) => t(nested, undefined, locale));
}

/**
 * Translated attributes plus the marker the browser runtime uses to re-translate them.
 * Usage: `<button {...i18nAttrs({ 'aria-label': 'carousel.next' })}>`.
 */
export function i18nAttrs(
  map: Readonly<Record<string, TranslationKey>>,
  vars?: TranslationVars,
): Record<string, string> {
  const attributes: Record<string, string> = {
    'data-i18n-attr': Object.entries(map)
      .map(([name, key]) => `${name}:${key}`)
      .join('|'),
  };
  for (const [name, key] of Object.entries(map)) attributes[name] = t(key, vars);
  if (vars) attributes['data-i18n-vars'] = JSON.stringify(vars);
  return attributes;
}

/** Serialised dictionaries, safe to inline inside a <script> element. */
export function serializedDictionaries(): string {
  return JSON.stringify(flatDictionaries).replace(/</g, '\\u003c');
}
