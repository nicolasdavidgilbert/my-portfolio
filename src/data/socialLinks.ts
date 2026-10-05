import type { SocialId, SocialLink } from '../types/site';
import { person } from './site';

export const socialLinks: readonly SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/nicolasdavidgilbert',
    display: 'github.com/nicolasdavidgilbert',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gilbertnicolas',
    display: 'linkedin.com/in/gilbertnicolas',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${person.email}`,
    display: person.email,
  },
];

export function getSocialLink(id: SocialId): SocialLink {
  const link = socialLinks.find((item) => item.id === id);
  if (!link) throw new Error(`Missing social link: ${id}`);
  return link;
}
