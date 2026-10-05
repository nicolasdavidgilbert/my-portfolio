export interface ExperienceEntry {
  /** Shown instead of a date when no exact period is documented. */
  readonly period: string;
  readonly title: string;
  readonly organization?: string;
  readonly description: string;
  readonly current?: boolean;
}
