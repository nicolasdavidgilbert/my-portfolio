import type { SkillCategory } from '../types';
export { iconColors as techColors } from './iconColors';

export const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      { label: 'HTML', icon: '/icons/html5.svg' },
      { label: 'CSS', icon: '/icons/css3.svg' },
      { label: 'JavaScript', icon: '/icons/js.svg' },
      { label: 'TypeScript', icon: '/icons/typescript.svg' },
      { label: 'React', icon: '/icons/react.svg' },
      { label: 'TailwindCSS', icon: '/icons/tailwind.svg' },
      { label: 'Astro', icon: '/icons/astro.svg' },
      { label: 'flet', icon: '/icons/flet.svg' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Python', icon: '/icons/python.svg' },
      { label: 'Kotlin', icon: '/icons/kotlin.svg' },
      { label: 'Node.js', icon: '/icons/nodejs.svg' },
      { label: 'Next.js', icon: '/icons/nextjs.svg' },
      { label: 'Flask', icon: '/icons/flask.svg' },
      { label: 'MySQL', icon: '/icons/mysql.svg' },
      { label: 'MongoDB', icon: '/icons/mongodb.svg' },
      { label: 'MariaDB', icon: '/icons/mariadb.svg' },
      { label: 'Neon', icon: '/icons/neon.svg' },
      { label: 'Nginx', icon: '/icons/nginx.svg' },
      { label: 'Docker', icon: '/icons/docker.svg' },
      { label: 'Groq', icon: '/icons/groq.svg' },
      { label: 'InsForge', icon: '/icons/insforge.svg' },
      { label: 'Pushover', icon: '/icons/pushover.svg' },
    ],
  },
  {
    title: 'Herramientas',
    items: [
      { label: 'Git', icon: '/icons/git.svg' },
      { label: 'GitHub', icon: '/icons/github.svg' },
      { label: 'Bash', icon: '/icons/bash.svg' },
      { label: 'Linux', icon: '/icons/linux.svg' },
      { label: 'VS Code', icon: '/icons/vscode.svg' },
      { label: 'npm', icon: '/icons/npm.svg' },
      { label: 'Vercel', icon: '/icons/vercel.svg' },
      { label: 'Telegram', icon: '/icons/telegram.svg' },
      { label: 'tar', icon: '/icons/tar.svg' },
    ],
  },
];
