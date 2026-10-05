import type { ExperienceEntry } from '../types/experience';

export const experience: readonly ExperienceEntry[] = [
  {
    kind: 'education',
    period: 'En curso',
    title: 'Administración de Sistemas Informáticos en Red',
    organization: 'ASIR',
    description: 'Administración Linux, redes, contenedores, servicios y despliegues reproducibles.',
    current: true,
  },
  {
    kind: 'international',
    period: 'Experiencia internacional',
    title: 'Erasmus+ en Bulgaria',
    organization: 'Liderazgo técnico con IA',
    description: 'Lideré la implementación de un agente de IA para prospección comercial.',
  },
  {
    kind: 'education',
    period: 'Titulación',
    title: 'Desarrollo de Aplicaciones Multiplataforma',
    organization: 'DAM',
    description: 'Base en aplicaciones, bases de datos, interfaces y arquitectura de software.',
  },
];
