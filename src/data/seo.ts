import { t } from '../i18n/translate';
import { SITE_URL, SOCIAL_IMAGE, absoluteUrl, person } from './site';
import { socialLinks } from './socialLinks';
import { projects } from './projects';

const profileUrls = socialLinks.filter((link) => link.id !== 'email').map((link) => link.href);

const personStructuredData = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: person.fullName,
  alternateName: [person.shortName, person.alternateName],
  url: SITE_URL,
  image: absoluteUrl(SOCIAL_IMAGE),
  jobTitle: t('person.role'),
  email: `mailto:${person.email}`,
  address: { '@type': 'PostalAddress', addressRegion: 'Canary Islands', addressCountry: 'ES' },
  sameAs: profileUrls,
  knowsAbout: [
    'Full stack development',
    'Linux systems administration',
    'Networking',
    'Docker',
    'Automation',
    'AI integration',
  ],
};

const works = projects.map((project) => ({
  name: t(`projects.${project.id}.name`),
  date: project.date,
  repo: project.repo,
  url: project.demo ?? project.repo,
}));

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    personStructuredData,
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: t('meta.title'),
      description: t('meta.description'),
      inLanguage: 'en',
      mainEntity: { '@id': `${SITE_URL}/#person` },
      hasPart: works.map((work) => ({
        '@type': 'SoftwareSourceCode',
        name: work.name,
        dateCreated: work.date,
        codeRepository: work.repo,
        url: work.url,
        author: { '@id': `${SITE_URL}/#person` },
      })),
    },
  ],
};
