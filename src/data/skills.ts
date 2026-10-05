import type { TechCategory, Technology } from '../types/technology';

/** Display order of the areas; labels live under `stack.categories.<id>`. */
export const techCategories: readonly TechCategory[] = [
  'systems',
  'devops',
  'languages',
  'frontend',
  'backend',
  'services',
  'tools',
];

/**
 * Only core technologies are rendered as cards (icon, colour and projects);
 * the rest appear by name in the grouped list but keep the same data.
 * `projects` only lists project cards whose code actually uses the technology;
 * technologies without a project card here simply have none.
 * Core technologies come first because they define the profile.
 */
export const technologies: readonly Technology[] = [
  {
    label: 'Linux',
    icon: '/icons/linux.svg',
    color: '#FCC624',
    category: 'systems',
    core: true,
    projects: ['linux-backup-tui', 'backup-scripts'],
  },
  {
    label: 'Python',
    icon: '/icons/python.svg',
    color: '#3776AB',
    category: 'languages',
    core: true,
    projects: ['linux-backup-tui', 'recordatorios-bot', 'sistema-llamadas'],
  },
  {
    label: 'Docker',
    icon: '/icons/docker.svg',
    color: '#1D63ED',
    category: 'devops',
    core: true,
    projects: ['sistema-llamadas'],
  },
  {
    label: 'TypeScript',
    icon: '/icons/typescript.svg',
    color: '#3178C6',
    category: 'languages',
    core: true,
    projects: ['cesta-plus-plus'],
  },
  {
    label: 'Bash',
    icon: '/icons/bash.svg',
    color: '#4EAA25',
    category: 'systems',
    core: true,
    projects: ['backup-scripts'],
  },
  {
    label: 'React',
    icon: '/icons/react.svg',
    color: '#58C4DC',
    category: 'frontend',
    core: true,
    projects: ['cesta-plus-plus', 'cuestionarios-online'],
  },

  { label: 'Nginx', icon: '/icons/nginx.svg', color: '#009639', category: 'systems', projects: ['sistema-llamadas'] },
  {
    label: 'Networking',
    labelKey: 'stack.tech.networking',
    color: '#6fb7ff',
    category: 'systems',
    projects: ['recordatorios-bot'],
  },
  {
    label: 'tar',
    icon: '/icons/tar.svg',
    color: '#a6adb8',
    invert: true,
    category: 'systems',
    projects: ['linux-backup-tui', 'backup-scripts'],
  },

  {
    label: 'Vercel',
    icon: '/icons/vercel.svg',
    color: '#ffffff',
    category: 'devops',
    projects: ['cuestionarios-online'],
  },
  { label: 'CI', color: '#5fd38d', category: 'devops', projects: ['cuestionarios-online'] },

  { label: 'JavaScript', icon: '/icons/js.svg', color: '#F7DF1E', category: 'languages', projects: [] },
  { label: 'Kotlin', icon: '/icons/kotlin.svg', color: '#7F52FF', category: 'languages', projects: [] },

  {
    label: 'Next.js',
    icon: '/icons/nextjs.svg',
    color: '#ffffff',
    category: 'frontend',
    projects: ['cesta-plus-plus'],
  },
  {
    label: 'Astro',
    icon: '/icons/astro.svg',
    color: '#FF5D01',
    category: 'frontend',
    projects: ['cuestionarios-online'],
  },
  {
    label: 'Tailwind CSS',
    icon: '/icons/tailwind.svg',
    color: '#38BDF8',
    category: 'frontend',
    projects: ['cesta-plus-plus'],
  },
  { label: 'HTML', icon: '/icons/html5.svg', color: '#E34F26', category: 'frontend', projects: [] },
  { label: 'CSS', icon: '/icons/css3.svg', color: '#1572B6', category: 'frontend', projects: [] },
  { label: 'Flet', icon: '/icons/flet.svg', color: '#5ABAE7', category: 'frontend', projects: [] },

  { label: 'Flask', icon: '/icons/flask.svg', color: '#38A8BE', category: 'backend', projects: ['sistema-llamadas'] },
  {
    label: 'PostgreSQL (Neon)',
    icon: '/icons/neon.svg',
    color: '#00E599',
    category: 'backend',
    projects: ['cuestionarios-online'],
  },
  {
    label: 'MariaDB',
    icon: '/icons/mariadb.svg',
    color: '#C49A6C',
    category: 'backend',
    projects: ['sistema-llamadas'],
  },
  { label: 'Node.js', icon: '/icons/nodejs.svg', color: '#5FA04E', category: 'backend', projects: [] },
  { label: 'MySQL', icon: '/icons/mysql.svg', color: '#4479A1', category: 'backend', projects: [] },
  { label: 'MongoDB', icon: '/icons/mongodb.svg', color: '#47A248', category: 'backend', projects: [] },

  {
    label: 'Groq',
    icon: '/icons/groq.svg',
    color: '#F55036',
    category: 'services',
    projects: ['cuestionarios-online'],
  },
  {
    label: 'InsForge',
    icon: '/icons/insforge.svg',
    color: '#8b8ff7',
    invert: true,
    category: 'services',
    projects: ['cesta-plus-plus'],
  },
  {
    label: 'Telegram',
    icon: '/icons/telegram.svg',
    color: '#26A5E4',
    category: 'services',
    projects: ['recordatorios-bot'],
  },
  {
    label: 'Pushover',
    icon: '/icons/pushover.svg',
    color: '#409CED',
    category: 'services',
    projects: ['sistema-llamadas'],
  },

  { label: 'Git', icon: '/icons/git.svg', color: '#F05032', category: 'tools', projects: [] },
  { label: 'GitHub', icon: '/icons/github.svg', color: '#f0f6fc', category: 'tools', projects: [] },
  { label: 'VS Code', icon: '/icons/vscode.svg', color: '#007ACC', category: 'tools', projects: [] },
  { label: 'npm', icon: '/icons/npm.svg', color: '#CB3837', category: 'tools', projects: [] },
];
