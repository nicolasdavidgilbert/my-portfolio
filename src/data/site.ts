import type { NavItem } from '../types/site';

export const SITE_URL = 'https://www.nicogilbert.es';
export const SITE_HOST = 'nicogilbert.es';

export const person = {
  fullName: 'Nicolás David Gilbert González',
  shortName: 'Nicolás Gilbert',
  alternateName: 'Nico',
  role: 'Desarrollador de software y administrador de sistemas',
  location: 'Canarias, España',
  available: true,
  email: 'nicolas.david.gilbert@gmail.com',
} as const;

export const SITE_TITLE = `${person.shortName} — Desarrollador de software y administrador de sistemas`;
export const SITE_DESCRIPTION =
  'Portfolio de Nicolás David Gilbert González. Desarrollo aplicaciones full stack y administro la infraestructura que las ejecuta: Linux, redes, Docker, automatización e integraciones de IA.';
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

export const navigation: readonly NavItem[] = [
  { label: 'Perfil', href: '#perfil' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sistemas', href: '#sistemas' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
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
