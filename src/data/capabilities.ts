import type { Capability } from '../types/technology';

/** Each practice links to the project card where it can be checked. */
export const capabilities: readonly Capability[] = [
  {
    area: 'systems.capabilities.linux.area',
    practice: 'systems.capabilities.linux.practice',
    evidence: 'linux-backup-tui',
  },
  {
    area: 'systems.capabilities.containers.area',
    practice: 'systems.capabilities.containers.practice',
    evidence: 'sistema-llamadas',
  },
  {
    area: 'systems.capabilities.networking.area',
    practice: 'systems.capabilities.networking.practice',
    evidence: 'recordatorios-bot',
  },
  {
    area: 'systems.capabilities.automation.area',
    practice: 'systems.capabilities.automation.practice',
    evidence: 'cuestionarios-online',
  },
  {
    area: 'systems.capabilities.ai.area',
    practice: 'systems.capabilities.ai.practice',
    evidence: 'cuestionarios-online',
  },
];
