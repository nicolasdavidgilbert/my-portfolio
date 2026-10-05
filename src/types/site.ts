export interface NavItem {
  readonly label: string;
  readonly href: `#${string}`;
}

export type SocialId = 'github' | 'linkedin' | 'email';

export interface SocialLink {
  readonly id: SocialId;
  readonly label: string;
  readonly href: string;
  readonly display: string;
}
