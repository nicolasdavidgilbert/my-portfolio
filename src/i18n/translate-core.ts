import type { TranslationKey, TranslationVars } from './types';

/**
 * Replaces `{name}` placeholders. Dependency-free on purpose: the browser runtime
 * imports it without pulling the dictionaries into the JS bundle.
 */
export function interpolate(
  text: string,
  vars: TranslationVars | undefined,
  lookup: (key: TranslationKey) => string,
): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, name: string) => {
    const value = vars[name];
    if (value === undefined) return match;
    return typeof value === 'object' ? lookup(value.k) : String(value);
  });
}
