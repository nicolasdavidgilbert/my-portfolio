import type { NavItem } from '../types/site';

export const SITE_URL = 'https://www.nicogilbert.es';
export const SITE_HOST = 'nicogilbert.es';

export const person = {
  fullName: 'Nicolás David Gilbert González',
  shortName: 'Nicolás Gilbert',
  alternateName: 'Nico',
  available: true,
  email: 'nicolas.david.gilbert@gmail.com',
} as const;

export const SOCIAL_IMAGE = '/social-preview.png';

/**
 * Theme colours needed outside CSS (meta theme-color, contrast maths).
 * Keep in sync with the @theme tokens in styles/global.css.
 */
export const themeColors = {
  bg: '#0e1013',
  accent: '#f2b45c',
} as const;

export const sourceRepo = 'https://github.com/nicolasdavidgilbert/my-portfolio';

/** No CV is published yet; set a URL (e.g. '/cv.pdf') to show it in the header and hero. */
export const cvUrl: string | undefined = undefined;

/** Section anchors are in English (the default locale) and stay the same in every language. */
export const navigation: readonly NavItem[] = [
  { label: 'nav.about', href: '#about' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.systems', href: '#systems' },
  { label: 'nav.stack', href: '#stack' },
  { label: 'nav.contact', href: '#contact' },
];

export function absoluteUrl(path = '/'): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

/** Two-digit section number, derived from the section's position in the main navigation. */
export function sectionIndex(id: string): string {
  const position = navigation.findIndex((item) => item.href === `#${id}`);
  if (position < 0) throw new Error(`Section "${id}" is missing from the navigation`);
  return String(position + 1).padStart(2, '0');
}
