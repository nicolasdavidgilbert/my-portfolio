/** Layer of the hero 3D stack being inspected, or null when none is. */
export interface InfraLayerDetail {
  readonly id: string;
  readonly name: string;
  readonly detail: string;
  readonly project: string;
}

/** Request to bring a project card into view in the carousel. */
export interface ProjectOpenDetail {
  readonly id: string;
}

/** Custom DOM events shared between components, by name. */
export interface AppEvents {
  'infra:layer': InfraLayerDetail | null;
  'project:open': ProjectOpenDetail;
}
