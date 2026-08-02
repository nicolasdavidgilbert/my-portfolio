import { DEFAULT_AUTHOR, DEFAULT_ROLE, LOCATION } from './header';
import { commits } from './projects';

export const SITE_URL = ('https://www.nicogilbert.es/').replace(/\/$/, '');
export const SITE_NAME = 'Portfolio de Nicolás David Gilbert González';
export const SITE_TITLE = 'Nicolás David Gilbert González · Desarrollador Multiplataforma y Estudiante de ASIR';
export const SITE_DESCRIPTION =
  'Portfolio de Nicolás David Gilbert González, desarrollador multiplataforma y estudiante de ASIR especializado en Full Stack, Linux, redes, Docker, automatización e integración de IA.';
export const SITE_KEYWORDS = [
  'Nicolás David Gilbert González',
  'Nico desarrollador',
  'desarrollador multiplataforma',
  'portfolio desarrollador',
  'desarrollador full stack',
  'administración de sistemas',
  'ASIR',
  'DAM',
  'Linux',
  'Docker',
  'React',
  'Astro',
  'Next.js',
  'Python',
  'JavaScript',
  'TypeScript',
  'automatización con IA',
  'Canarias',
  'España',
];

export const SOCIAL_IMAGE = '/social-preview.png';

export const profileLinks = [
  'https://github.com/nicolasdavidgilbert',
  'https://www.linkedin.com/in/gilbertnicolas',
];

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return new URL(path, SITE_URL + '/').toString();
}

export const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: DEFAULT_AUTHOR,
  alternateName: 'Nico',
  url: SITE_URL,
  image: absoluteUrl(SOCIAL_IMAGE),
  jobTitle: DEFAULT_ROLE,
  address: {
    '@type': 'PostalAddress',
    addressRegion: LOCATION,
    addressCountry: 'ES',
  },
  email: 'mailto:nicolas.david.gilbert@gmail.com',
  sameAs: profileLinks,
  knowsAbout: SITE_KEYWORDS.filter((keyword) => keyword !== DEFAULT_AUTHOR),
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Desarrollador Multiplataforma',
    skills: 'Full Stack, Linux, redes, Docker, bases de datos, automatización e IA',
  },
};

export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: 'Portfolio Nico',
  url: SITE_URL,
  inLanguage: 'es',
  author: {
    '@type': 'Person',
    name: DEFAULT_AUTHOR,
  },
  description: SITE_DESCRIPTION,
};

export const portfolioStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: SITE_TITLE,
  url: SITE_URL,
  inLanguage: 'es',
  description: SITE_DESCRIPTION,
  mainEntity: personStructuredData,
  hasPart: commits.map((project) => ({
    '@type': 'CreativeWork',
    name: project.title.replace(/^[^:]+:\s*/, ''),
    dateCreated: project.date,
    programmingLanguage: project.chips,
    url: project.demo ?? project.repo,
    codeRepository: project.repo,
  })),
};
