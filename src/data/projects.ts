import type { Commit } from '../types';

export const commits: Commit[] = [
  {
    date: '2026-06-04',
    title: 'feat: Cesta++ — listas de compra colaborativas en tiempo real',
    chips: ['Next.js', 'React', 'TypeScript', 'InsForge', 'Tailwind'],
    repo: 'https://github.com/nicolasdavidgilbert/cestapp',
    demo: 'https://cestapp.insforge.site',
    summary: 'Listas de compra compartidas que sincronizan cambios al instante y mantienen productos, precios e invitaciones en un único flujo.',
    highlights: ['Colaboración Realtime', 'Acceso por invitación', 'Historial de precios'],
    image: '/projects/cestapp.webp',
    visual: 'web',
    accent: '#f59e0b',
    diff: [
      { type: 'ctx', text: '@@' },
      { type: 'add', text: 'feat: app de gestión de listas de compra colaborativas' },
      { type: 'add', text: 'feat: autenticación por email/OAuth con InsForge' },
      { type: 'add', text: 'feat: dashboard para listas propias y compartidas' },
      { type: 'add', text: 'feat: detalle de lista colaborativa en /dashboard/[id]' },
      { type: 'add', text: 'feat: sincronización Realtime para cambios en listas' },
      { type: 'add', text: 'feat: catálogo de productos con historial de precios' },
      { type: 'add', text: 'feat: invitaciones mediante ruta /invite/[token]' },
      { type: 'add', text: 'feat: perfil de usuario en /dashboard/profile' },
      { type: 'add', text: 'feat: auditoría de actividad preparada para analítica futura' },
      { type: 'add', text: 'chore: estructura Next.js App Router con componentes, contexts, lib, docs y sql' },
    ]
  },
  {
    date: '2026-06-09',
    title: 'feat: Cuestionarios Online — app pública con generación desde PDF, validación y moderación',
    chips: ['Astro', 'React', 'Neon', 'Vercel', 'Groq'],
    repo: 'https://github.com/nicolasdavidgilbert/cuestionario',
    demo: 'https://cuestionario.online',
    summary: 'Plataforma educativa pública que transforma PDFs y texto en cuestionarios listos para practicar, compartir y moderar.',
    highlights: ['Generación asistida por IA', 'Validación y deduplicación', 'Moderación con auditoría'],
    image: '/projects/cuestionarios.webp',
    visual: 'web',
    accent: '#2dd4bf',
    diff: [
      { type: 'ctx', text: '@@' },
      { type: 'add', text: 'feat: aplicación web de cuestionarios interactivos con Astro + React' },
      { type: 'add', text: 'feat: catálogo por grado, curso y unidad' },
      { type: 'add', text: 'feat: creación de cuestionarios desde PDF, JSON o texto pegado' },
      { type: 'add', text: 'feat: generación de preguntas con IA usando Groq' },
      { type: 'add', text: 'feat: persistencia en Neon Postgres con tabla user_quizzes' },
      { type: 'add', text: 'feat: validación centralizada de preguntas, opciones y respuestas correctas' },
      { type: 'add', text: 'feat: sistema de reportes, auditoría y soft delete' },
      { type: 'add', text: 'feat: deduplicación de cuestionarios mediante hash' },
      { type: 'add', text: 'feat: exportación admin de cuestionarios, reportes y auditoría' },
      { type: 'add', text: 'chore: CI con tests y build automático' },
    ]
  },
  {
    date: '2026-03-01',
    title: 'chore: Backup Scripts — copias completas e incrementales en Linux',
    chips: ['Bash', 'Linux', 'tar'],
    repo: 'https://github.com/nicolasdavidgilbert/backups',
    summary: 'Herramientas Bash para automatizar copias completas e incrementales con snapshots, estructura por fechas y cancelación segura.',
    highlights: ['Backups FULL e INC', 'Snapshots con .snar', 'Recuperación y limpieza segura'],
    visual: 'terminal',
    accent: '#60a5fa',
    diff: [
      { type: 'ctx', text: '@@' },
      { type: 'add', text: 'feat: script inicial.sh para backup completo comprimido en .tar.gz' },
      { type: 'add', text: 'feat: script incremental.sh basado en metadatos .snar' },
      { type: 'add', text: 'feat: estructura organizada por fechas para backups FULL e INC' },
      { type: 'add', text: 'feat: detección del último snapshot incremental' },
      { type: 'add', text: 'feat: spinner visual mientras tar está ejecutándose' },
      { type: 'add', text: 'feat: limpieza segura al cancelar con Ctrl+C' },
      { type: 'add', text: 'docs: instrucciones de uso con origen y destino opcional' },
      { type: 'add', text: 'docs: requisitos Linux, bash, tar, du y find' },
    ]
  },
  {
    date: '2026-02-25',
    title: 'feat: RecordatoriosBot — bot de Telegram activado por presencia en red local',
    chips: ['Python', 'Telegram'],
    repo: 'https://github.com/nicolasdavidgilbert/RecordatoriosBot',
    summary: 'Un bot que detecta cuándo alguien vuelve a casa y entrega sus recordatorios pendientes justo en ese momento.',
    highlights: ['Detección local con arping', 'Avisos contextuales', 'Gestión desde Telegram'],
    visual: 'network',
    accent: '#38bdf8',
    diff: [
      { type: 'ctx', text: '@@' },
      { type: 'add', text: 'feat: bot de Telegram para enviar recordatorios pendientes' },
      { type: 'add', text: 'feat: detección de dispositivos conectados mediante arping' },
      { type: 'add', text: 'feat: envío automático cuando una persona llega a casa' },
      { type: 'add', text: 'feat: eliminación automática cuando todos los dispositivos reciben el recordatorio' },
      { type: 'add', text: 'feat: gestión de recordatorios mediante comandos de Telegram' },
      { type: 'add', text: 'chore: configuración con .env.example' },
      { type: 'add', text: 'chore: almacenamiento simple en reminders.json' },
      { type: 'add', text: 'test: scripts de prueba para arping y mensajes' },
    ]
  },
  {
    date: '2025-05-21',
    title: 'chore: Sistema Llamadas Paciente–Enfermero — servidor Flask, panel web y control de relés',
    chips: ['Flask', 'MariaDB', 'Docker', 'Nginx', 'Pushover'],
    repo: 'https://github.com/nicolasdavidgilbert/Sistema-de-llamadas-Paciente-Enfermero',
    summary: 'Sistema completo de llamadas hospitalarias que conecta panel web, notificaciones, persistencia y control físico de relés.',
    highlights: ['Flujo de atención trazable', 'Despliegue multi-contenedor', 'Integración hardware y push'],
    visual: 'system',
    accent: '#fb7185',
    diff: [
      { type: 'ctx', text: '@@' },
      { type: 'add', text: 'chore: docker-compose para entorno con servicios del sistema' },
      { type: 'add', text: 'chore: configuración Nginx para publicar la aplicación' },
      { type: 'add', text: 'chore: scripts SQL para crear tablas y datos de prueba en MariaDB' },
      { type: 'add', text: 'feat: servidor Flask para llamadas, aceptación y presencia' },
      { type: 'add', text: 'feat: panel web para habitaciones, llamadas y asistentes' },
      { type: 'add', text: 'feat: registro de llamadas en CSV y PDF' },
      { type: 'add', text: 'feat: integración Push/Pushover para avisos y aceptación' },
      { type: 'add', text: 'feat: control de relés al aceptar o registrar presencia' },
      { type: 'add', text: 'fix: flujo de estados pendiente → atendida → presencia' },
    ]
  }
];

export const skills = [
  'kotlin', 'react', 'react-native', 'typescript', 'nextjs', 'astro', 'python', 'qt', 'tensorflow', 'flask', 'postgresql', 'mysql', 'mongo', 'docker', 'nginx', 'git'
];

export const readme = `# Hola, soy Nico

Soy Desarrollador de Aplicaciones Multiplataforma con una gran motivación por seguir aprendiendo y creciendo profesionalmente. Me apasiona crear soluciones eficientes y accesibles, y disfruto enfrentar retos que me permitan mejorar mis habilidades y aportar valor en cada proyecto. Siempre con ganas de aprender nuevas tecnologías y compartir conocimiento.

**Contacto rápido:** email, GitHub y LinkedIn abajo.`;
