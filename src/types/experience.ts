import type { TranslationKey } from '../i18n/types';

export interface ExperienceEntry {
  /** Shown instead of a date when no exact period is documented. */
  readonly period: TranslationKey;
  readonly title: TranslationKey;
  readonly organization?: TranslationKey;
  readonly description: TranslationKey;
  readonly current?: boolean;
}
