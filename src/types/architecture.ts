export interface ArchitectureNode {
  readonly label: string;
  readonly detail?: string;
}

/** Each stage is a step in the flow; nodes inside a stage run in parallel. */
export type ArchitectureStage = readonly ArchitectureNode[];

export interface ArchitectureDiagram {
  readonly title: string;
  readonly stages: readonly ArchitectureStage[];
}
