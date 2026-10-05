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

export const sourceRepo = 'https://github.com/nicolasdavidgilbert/my-portfolio';

/** No CV is published yet; set a URL (e.g. '/cv.pdf') to show it in the header and hero. */
export const cvUrl: string | undefined = undefined;

export const navigation: readonly NavItem[] = [
  { label: 'Perfil', href: '#perfil' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sistemas', href: '#sistemas' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
];

export function absoluteUrl(path = '/'): string {
  return new URL(path, `${SITE_URL}/`).toString();
}
