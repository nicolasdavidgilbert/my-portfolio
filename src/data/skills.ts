import type { TechnologyRow } from '../types/technology';

/** Ordered by how much each row defines the profile. */
export const technologyRows: readonly TechnologyRow[] = [
  {
    title: 'Systems & DevOps',
    items: [
      { label: 'Linux', icon: '/icons/linux.svg', color: '#FCC624' },
      { label: 'Bash', icon: '/icons/bash.svg', color: '#4EAA25' },
      { label: 'Docker', icon: '/icons/docker.svg', color: '#1D63ED' },
      { label: 'Nginx', icon: '/icons/nginx.svg', color: '#009639' },
      { label: 'Redes', color: '#6fb7ff' },
      { label: 'tar', icon: '/icons/tar.svg', color: '#a6adb8', invert: true },
      { label: 'Git', icon: '/icons/git.svg', color: '#F05032' },
      { label: 'GitHub', icon: '/icons/github.svg', color: '#f0f6fc' },
      { label: 'Vercel', icon: '/icons/vercel.svg', color: '#ffffff' },
      { label: 'CI', color: '#5fd38d' },
    ],
  },
  {
    title: 'Languages & Frontend',
    items: [
      { label: 'TypeScript', icon: '/icons/typescript.svg', color: '#3178C6' },
      { label: 'JavaScript', icon: '/icons/js.svg', color: '#F7DF1E' },
      { label: 'React', icon: '/icons/react.svg', color: '#58C4DC' },
      { label: 'Next.js', icon: '/icons/nextjs.svg', color: '#ffffff' },
      { label: 'Astro', icon: '/icons/astro.svg', color: '#FF5D01' },
      { label: 'Tailwind CSS', icon: '/icons/tailwind.svg', color: '#38BDF8' },
      { label: 'HTML', icon: '/icons/html5.svg', color: '#E34F26' },
      { label: 'CSS', icon: '/icons/css3.svg', color: '#1572B6' },
      { label: 'Kotlin', icon: '/icons/kotlin.svg', color: '#7F52FF' },
      { label: 'Flet', icon: '/icons/flet.svg', color: '#5ABAE7' },
    ],
  },
  {
    title: 'Backend, data & services',
    items: [
      { label: 'Python', icon: '/icons/python.svg', color: '#3776AB' },
      { label: 'Node.js', icon: '/icons/nodejs.svg', color: '#5FA04E' },
      { label: 'Flask', icon: '/icons/flask.svg', color: '#38A8BE' },
      { label: 'PostgreSQL (Neon)', icon: '/icons/neon.svg', color: '#00E599' },
      { label: 'MariaDB', icon: '/icons/mariadb.svg', color: '#C49A6C' },
      { label: 'MySQL', icon: '/icons/mysql.svg', color: '#4479A1' },
      { label: 'MongoDB', icon: '/icons/mongodb.svg', color: '#47A248' },
      { label: 'Groq', icon: '/icons/groq.svg', color: '#F55036' },
      { label: 'InsForge', icon: '/icons/insforge.svg', color: '#8b8ff7', invert: true },
      { label: 'Telegram', icon: '/icons/telegram.svg', color: '#26A5E4' },
      { label: 'Pushover', icon: '/icons/pushover.svg', color: '#409CED' },
      { label: 'npm', icon: '/icons/npm.svg', color: '#CB3837' },
      { label: 'VS Code', icon: '/icons/vscode.svg', color: '#007ACC' },
    ],
  },
];
