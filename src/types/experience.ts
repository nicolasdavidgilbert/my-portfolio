export type ExperienceKind = 'education' | 'international';

export interface ExperienceEntry {
  readonly kind: ExperienceKind;
  /** Shown instead of a date when no exact period is documented. */
  readonly period: string;
  readonly title: string;
  readonly organization?: string;
  readonly description: string;
  readonly current?: boolean;
}
