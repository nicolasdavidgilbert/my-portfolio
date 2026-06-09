export const iconColors = {
  HTML: '#E34F26',
  CSS: '#1572B6',
  JavaScript: '#F7DF1E',
  React: '#087EA4',
  TailwindCSS: '#38BDF8',
  Python: '#3776AB',
  'Node.js': '#339933',
  MySQL: '#4479A1',
  MongoDB: '#6CAC48',
  MariaDB: '#909090',
  'Next.js': '#909090',
  Nginx: '#009438',
  Flask: '#38A8BE',
  Docker: '#1D63ED',
  Pushover: '#409CED',
  Astro: '#FF5D01',
  TypeScript: '#3178C6',
  Neon: '#00E599',
  Groq: '#F97316',
  InsForge: '#6366F1',
  Linux: '#FCC624',
  Vercel: '#909090',
  Telegram: '#26A5E4',
  tar: '#909090',
  Git: '#F05032',
  GitHub: '#f8fafc',
  Terminal: '#4D4D4D',
  'VS Code': '#007ACC',
  npm: '#CB3837',
  Kotlin: '#CF5F9F',
  flet: '#5672B0',
  Bash: '#4EAA25',
  LinkedIn: '#0A66C2',
  Gmail: '#EA4335',
} as const;

export type IconName = keyof typeof iconColors;

export function getIconColor(name: string, fallback = '#94a3b8'): string {
  return (iconColors as Record<string, string | undefined>)[name] ?? fallback;
}
