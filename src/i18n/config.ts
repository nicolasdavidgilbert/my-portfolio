export const locales = ['en', 'es'] as const;

export type Locale = (typeof locales)[number];

/** The server always renders this locale; the others are applied in the browser. */
export const defaultLocale: Locale = 'en';

/** localStorage key holding the visitor's explicit choice. */
export const STORAGE_KEY = 'locale';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}
