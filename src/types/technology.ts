import type { TranslationKey } from '../i18n/types';
import type { ProjectId } from './project';

export interface TechItem {
  /** Proper name shown as is (Linux, Docker…). */
  readonly label: string;
  /** Set only when the name itself needs translating (e.g. "Networking"). */
  readonly labelKey?: TranslationKey;
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
  readonly projects: readonly ProjectId[];
}

export interface Capability {
  readonly area: TranslationKey;
  readonly practice: TranslationKey;
  /** Project card the practice can be verified against. */
  readonly evidence: ProjectId;
}
