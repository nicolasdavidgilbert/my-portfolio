export interface TechItem {
  readonly label: string;
  /** Path under /public/icons; items without one show a monogram. */
  readonly icon?: string;
  /** Brand colour used for hover accents. */
  readonly color: string;
  /** Icon ships as a black glyph and needs inverting on dark backgrounds. */
  readonly invert?: boolean;
}

export interface TechnologyRow {
  readonly title: string;
  readonly items: readonly TechItem[];
}

export interface Capability {
  readonly area: string;
  readonly practice: string;
  /** Project id the practice can be verified against. */
  readonly evidence: { readonly label: string; readonly href: string };
}
