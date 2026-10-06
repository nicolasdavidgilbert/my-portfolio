import type { Project } from '../types/project';

/** Ordered to alternate software and systems work. */
export const projects: readonly Project[] = [
  {
    id: 'cesta-plus-plus',
    accent: '#f2b45c',
    kind: 'software',
    stack: ['Next.js', 'TypeScript', 'InsForge', 'Tailwind CSS'],
    date: '2026-06',
    repo: 'https://github.com/nicolasdavidgilbert/cestapp',
    demo: 'https://cestapp.insforge.site',
    visual: {
      type: 'screenshot',
      src: '/projects/cestapp.webp',
      alt: 'projects.cesta-plus-plus.alt',
      width: 1440,
      height: 1000,
    },
  },
  {
    id: 'linux-backup-tui',
    accent: '#5fd38d',
    kind: 'systems',
    stack: ['Python', 'curses', 'tar', 'lsblk'],
    date: '2026-06',
    repo: 'https://github.com/nicolasdavidgilbert/backups/tree/python',
    visual: {
      type: 'tui',
      title: 'Linux USB Backup',
      devicesTitle: 'Discos externos',
      devices: [{ label: 'B4B2-5FEC', mountpoint: '/media/nico/B4B2-5FEC' }],
      fields: [
        { label: 'Acción', value: 'Crear backup' },
        { label: 'Origen', value: '/media/nico/B4B2-5FEC' },
        { label: 'Destino', value: '/home/nico/Backups' },
        { label: 'Tipo', value: 'Incremental' },
      ],
      button: 'Iniciar backup',
      log: ['Comprimiendo con tar...', 'Verificando integridad del archivo tar.gz...', 'Copia incremental completada.'],
      hint: 'Esc menú',
    },
  },
  {
    id: 'cuestionarios-online',
    accent: '#5145CD',
    kind: 'software',
    stack: ['Astro', 'React', 'Neon Postgres', 'Groq', 'Vercel'],
    date: '2026-06',
    repo: 'https://github.com/nicolasdavidgilbert/cuestionario',
    demo: 'https://cuestionario.online',
    visual: {
      type: 'screenshot',
      src: '/projects/cuestionarios.webp',
      alt: 'projects.cuestionarios-online.alt',
      width: 1440,
      height: 1000,
    },
  },
  {
    id: 'backup-scripts',
    accent: '#6fb7ff',
    kind: 'systems',
    stack: ['Bash', 'tar', 'Linux'],
    date: '2026-03',
    repo: 'https://github.com/nicolasdavidgilbert/backups',
    visual: {
      type: 'terminal',
      title: 'backups — bash',
      lines: [
        { kind: 'comment', text: 'projects.backup-scripts.terminal.0' },
        { kind: 'command', text: 'projects.backup-scripts.terminal.1' },
        { kind: 'comment', text: 'projects.backup-scripts.terminal.2' },
        { kind: 'command', text: 'projects.backup-scripts.terminal.3' },
        { kind: 'command', text: 'projects.backup-scripts.terminal.4' },
        { kind: 'output', text: 'projects.backup-scripts.terminal.5' },
        { kind: 'output', text: 'projects.backup-scripts.terminal.6' },
        { kind: 'output', text: 'projects.backup-scripts.terminal.7' },
        { kind: 'comment', text: 'projects.backup-scripts.terminal.8' },
      ],
    },
  },
  {
    id: 'recordatorios-bot',
    accent: '#38bdf8',
    kind: 'systems',
    stack: ['Python', 'arping', 'Telegram Bot API'],
    date: '2026-02',
    repo: 'https://github.com/nicolasdavidgilbert/RecordatoriosBot',
    visual: {
      type: 'diagram',
      diagram: {
        title: 'projects.recordatorios-bot.diagram.title',
        stages: [
          [
            {
              label: 'projects.recordatorios-bot.diagram.localNetwork',
              detail: 'projects.recordatorios-bot.diagram.deviceConnects',
            },
          ],
          [
            {
              label: 'projects.recordatorios-bot.diagram.arping',
              detail: 'projects.recordatorios-bot.diagram.presenceDetected',
            },
          ],
          [
            {
              label: 'projects.recordatorios-bot.diagram.pythonBot',
              detail: 'projects.recordatorios-bot.diagram.pendingReminders',
            },
          ],
          [
            {
              label: 'projects.recordatorios-bot.diagram.telegram',
              detail: 'projects.recordatorios-bot.diagram.messageDelivered',
            },
          ],
        ],
      },
    },
  },
  {
    id: 'sistema-llamadas',
    accent: '#fb7185',
    kind: 'systems',
    stack: ['Flask', 'MariaDB', 'Docker', 'Nginx', 'Pushover'],
    date: '2025-05',
    repo: 'https://github.com/nicolasdavidgilbert/Sistema-de-llamadas-Paciente-Enfermero',
    visual: {
      type: 'diagram',
      diagram: {
        title: 'projects.sistema-llamadas.diagram.title',
        stages: [
          [
            {
              label: 'projects.sistema-llamadas.diagram.call',
              detail: 'projects.sistema-llamadas.diagram.patientRoom',
            },
          ],
          [
            {
              label: 'projects.sistema-llamadas.diagram.nginx',
              detail: 'projects.sistema-llamadas.diagram.publishesApp',
            },
          ],
          [{ label: 'projects.sistema-llamadas.diagram.flask', detail: 'projects.sistema-llamadas.diagram.callsFlow' }],
          [
            { label: 'projects.sistema-llamadas.diagram.mariadb', detail: 'projects.sistema-llamadas.diagram.callLog' },
            {
              label: 'projects.sistema-llamadas.diagram.pushover',
              detail: 'projects.sistema-llamadas.diagram.staffAlert',
            },
            {
              label: 'projects.sistema-llamadas.diagram.relays',
              detail: 'projects.sistema-llamadas.diagram.physicalSignal',
            },
          ],
        ],
      },
    },
  },
];
