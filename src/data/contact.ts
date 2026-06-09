import { iconColors } from './iconColors';
export { iconColors } from './iconColors';

export interface ContactChannel {
  id: string;
  name: string;
  url: string;
  displayValue: string;
  cta: string;
  color: string;
  delay: string;
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

export function getContactChannels({ repoUrl, linkedinUrl, emailUrl }: ContactProps): ContactChannel[] {
  return [
    {
      id: "01",
      name: "GitHub",
      url: repoUrl,
      displayValue: "github.com/nicolasdavid",
      cta: "Explorar repositorios",
      color: iconColors.GitHub,
      delay: "reveal-delay-1",
      icon: "github"
    },
    {
      id: "02",
      name: "LinkedIn",
      url: linkedinUrl,
      displayValue: "in/nicolasdavidgilbertgonzalez",
      cta: "Conectar en red",
      color: iconColors.LinkedIn,
      delay: "reveal-delay-2",
      icon: "linkedin"
    },
    {
      id: "03",
      name: "Email",
      url: `mailto:${emailUrl}`,
      displayValue: emailUrl,
      cta: "Enviar mensaje directo",
      color: iconColors.Gmail,
      delay: "reveal-delay-3",
      icon: "email"
    }
  ];
}
