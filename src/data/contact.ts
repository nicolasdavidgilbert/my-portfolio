export interface ContactChannel {
  id: string;
  name: string;
  url: string;
  displayValue: string;
  cta: string;
  icon: string;
}

export interface ContactProps {
  repoUrl: string;
  linkedinUrl: string;
  emailUrl: string;
}

export const iconMap: Record<string, string> = {
  github: '/icons/github.svg',
  linkedin: '/icons/linkedin.svg',
  email: '/icons/gmail.svg',
};

function visibleProfileUrl(url: string) {
  const parsed = new URL(url);
  return `${parsed.hostname.replace(/^www\./, '')}${parsed.pathname.replace(/\/$/, '')}`;
}

export function getContactChannels({ repoUrl, linkedinUrl, emailUrl }: ContactProps): ContactChannel[] {
  return [
    {
      id: '01',
      name: 'GitHub',
      url: repoUrl,
      displayValue: visibleProfileUrl(repoUrl),
      cta: 'Explorar repositorios',
      icon: 'github',
    },
    {
      id: '02',
      name: 'LinkedIn',
      url: linkedinUrl,
      displayValue: visibleProfileUrl(linkedinUrl),
      cta: 'Conectar en red',
      icon: 'linkedin',
    },
    {
      id: '03',
      name: 'Email',
      url: `mailto:${emailUrl}`,
      displayValue: emailUrl,
      cta: 'Enviar mensaje',
      icon: 'email',
    },
  ];
}
