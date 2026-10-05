export interface TechItem {
  readonly label: string;
  /** Path under /public/icons; items without one show a monogram. */
  readonly icon?: string;
  /** Brand colour used for hover accents. */
  readonly color: string;
  /** Icon ships as a black glyph and needs inverting on dark backgrounds. */
  readonly invert?: boolean;
}

export type TechCategory = 'systems' | 'devops' | 'languages' | 'frontend' | 'backend' | 'services' | 'tools';

export interface Technology extends TechItem {
  readonly category: TechCategory;
  /** Technologies that define the profile get a larger tile. */
  readonly core?: boolean;
  /** Ids of the project cards where this technology is used. */
  readonly projects: readonly string[];
}

export interface Capability {
  readonly area: string;
  readonly practice: string;
  /** Project id the practice can be verified against. */
  readonly evidence: { readonly label: string; readonly href: string };
}
