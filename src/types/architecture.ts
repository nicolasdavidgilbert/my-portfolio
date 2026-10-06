import type { TranslationKey } from '../i18n/types';

export interface ArchitectureNode {
  readonly label: TranslationKey;
  readonly detail?: TranslationKey;
}

/** Each stage is a step in the flow; nodes inside a stage run in parallel. */
export type ArchitectureStage = readonly ArchitectureNode[];

export interface ArchitectureDiagram {
  readonly title: TranslationKey;
  readonly stages: readonly ArchitectureStage[];
}
