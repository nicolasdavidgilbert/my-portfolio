import type { TranslationKey } from '../i18n/types';

export interface NavItem {
  readonly label: TranslationKey;
  readonly href: `#${string}`;
}

export type SocialId = 'github' | 'linkedin' | 'email';

export interface SocialLink {
  readonly id: SocialId;
  readonly label: string;
  readonly href: string;
  readonly display: string;
}
