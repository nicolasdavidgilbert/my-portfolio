import type { Capability } from '../types/technology';

/** Each practice links to the project where it can be checked. */
export const capabilities: readonly Capability[] = [
  {
    area: 'Linux & shell',
    practice:
      'Backups completos, incrementales y diferenciales con tar y snapshots .snar: primero en Bash y después como TUI en Python con detección de discos vía lsblk.',
    evidence: { label: 'Linux Backup TUI', href: '#linux-backup-tui' },
  },
  {
    area: 'Contenedores y servicios',
    practice: 'Entorno multi-servicio con docker-compose: Flask, MariaDB y Nginx publicando la aplicación.',
    evidence: { label: 'Sistema de llamadas', href: '#sistema-llamadas' },
  },
  {
    area: 'Redes',
    practice: 'Detección de presencia de dispositivos en la red local con arping.',
    evidence: { label: 'RecordatoriosBot', href: '#recordatorios-bot' },
  },
  {
    area: 'Automatización',
    practice: 'Notificaciones con Telegram y Pushover, control de relés y CI con tests y build automático.',
    evidence: { label: 'Cuestionarios Online', href: '#cuestionarios-online' },
  },
  {
    area: 'Integraciones de IA',
    practice: 'Generación de cuestionarios con Groq a partir de PDF y texto, con validación de la salida.',
    evidence: { label: 'Cuestionarios Online', href: '#cuestionarios-online' },
  },
];
