import type { Dictionary } from './types';

/** Spanish dictionary. Must mirror `en.ts` key by key (enforced by `Dictionary`). */
export const es: Dictionary = {
  meta: {
    title: 'Nicolás Gilbert — Desarrollador de software y administrador de sistemas',
    description:
      'Portfolio de Nicolás David Gilbert González. Desarrollo aplicaciones full stack y administro la infraestructura que las ejecuta: Linux, redes, Docker, automatización e integraciones de IA.',
  },
  a11y: {
    skip: 'Saltar al contenido',
    newTab: '(se abre en una pestaña nueva)',
    mainNav: 'Principal',
    mobileNav: 'Principal (móvil)',
    menu: 'Menú de navegación',
    language: 'Idioma',
  },
  person: {
    role: 'Desarrollador de software y administrador de sistemas',
    location: 'Canarias, España',
  },
  nav: {
    about: 'Perfil',
    projects: 'Proyectos',
    systems: 'Sistemas',
    stack: 'Stack',
    contact: 'Contacto',
  },
  hero: {
    available: 'Disponible para oportunidades',
    titleFirst: 'Desarrollador de software',
    titleSecond: 'Administrador de sistemas.',
    lead: 'Construyo aplicaciones completas y administro la infraestructura que las mantiene en marcha. Combino desarrollo, Linux, redes e integración de IA con una visión práctica de producto.',
    viewProjects: 'Ver proyectos',
  },
  heroVisual: {
    focusWords: ['aplicaciones', 'infraestructura', 'automatización', 'redes'],
    focusAll: 'aplicaciones, infraestructura, automatización, redes',
    tagsLabel: 'Tecnologías destacadas',
    viewTag: ': ver {project}',
    tags: {
      linux: 'Linux Backup TUI',
      docker: 'Sistema de llamadas (docker-compose)',
      typescript: 'Cesta++ (Next.js + TypeScript)',
    },
  },
  infra: {
    navLabel: 'Capas de la pila: ir al proyecto de cada una',
    hint: 'arrastra para girar · pasa por una capa',
    view: ': ver {project}',
    layers: {
      apps: 'Apps',
      services: 'Servicios',
      network: 'Red',
      linux: 'Linux',
    },
  },
  status: {
    available: 'disponible',
    unavailable: 'no disponible',
  },
  about: {
    title: 'Del código a la infraestructura que lo ejecuta.',
    intro:
      'Mi perfil conecta desarrollo de producto y operaciones. Puedo trabajar desde la interfaz y el backend hasta el despliegue, la red y la automatización que hacen que una solución sea realmente utilizable.',
    pillars: {
      development:
        'Construyo aplicaciones frontend y backend y productos completos, desde la interfaz hasta la base de datos.',
      systems: 'Administro Linux, servicios, redes, contenedores e infraestructura.',
      automation: 'Automatizo despliegues, tareas repetitivas, servicios e integraciones, incluidas las de IA.',
    },
    journeyLabel: 'Trayectoria',
    journeyTitle: 'Formación y experiencia',
    statusLabel: 'Estado actual',
  },
  journey: {
    asir: {
      period: 'En curso',
      title: 'Administración de Sistemas Informáticos en Red',
      organization: 'ASIR',
      description: 'Administración Linux, redes, contenedores, servicios y despliegues reproducibles.',
    },
    erasmus: {
      period: 'Experiencia internacional',
      title: 'Erasmus+ en Bulgaria',
      organization: 'Liderazgo técnico con IA',
      description: 'Lideré la implementación de un agente de IA para prospección comercial.',
    },
    dam: {
      period: 'Titulación',
      title: 'Desarrollo de Aplicaciones Multiplataforma',
      organization: 'DAM',
      description: 'Base en aplicaciones, bases de datos, interfaces y arquitectura de software.',
    },
  },
  projectsSection: {
    title: 'Proyectos seleccionados',
    intro:
      'Producto web y herramientas de sistemas, todos con código público. Desliza, usa las flechas o elige uno abajo.',
  },
  carousel: {
    roleCarousel: 'carrusel',
    roleSlide: 'diapositiva',
    regionLabel: 'Proyectos seleccionados',
    slideLabel: '{n} de {total}',
    pause: 'Pausar el pase automático',
    resume: 'Reanudar el pase automático',
    previous: 'Proyecto anterior',
    next: 'Proyecto siguiente',
    tabsLabel: 'Ir a un proyecto',
  },
  projectUi: {
    demo: 'Demo',
    code: 'Código',
    ofProject: ' de {name}',
    stackOf: 'Stack de {name}',
    tuiLabel: 'Interfaz de terminal de {name}',
  },
  projects: {
    'cesta-plus-plus': {
      name: 'Cesta++',
      shortName: 'Cesta++',
      category: 'Aplicación web',
      tagline: 'Listas de compra colaborativas en tiempo real.',
      problem:
        'Listas de compra compartidas que sincronizan cambios al instante y mantienen productos, precios e invitaciones en un único flujo.',
      highlights: [
        'Sincronización Realtime de los cambios en listas compartidas.',
        'Autenticación por email/OAuth con InsForge.',
        'Invitaciones mediante enlace con token (/invite/[token]).',
        'Catálogo de productos con historial de precios.',
      ],
      alt: 'Panel de Cesta++ con las listas de compra del usuario',
    },
    'linux-backup-tui': {
      name: 'Linux Backup TUI',
      shortName: 'Linux Backup TUI',
      category: 'Sistemas · TUI en Python',
      tagline: 'Backups completos, incrementales y diferenciales desde la terminal.',
      problem:
        'Evolución en Python de Backup Scripts: una interfaz curses que detecta los discos externos, crea copias completas, incrementales o diferenciales con tar y restaura automáticamente la cadena necesaria.',
      highlights: [
        'Detección de discos externos con lsblk (USB, extraíbles y puntos de montaje en /media o /mnt).',
        'Copias completas, incrementales y diferenciales con tar --listed-incremental y snapshots .snar.',
        'Restauración que reconstruye la cadena FULL → DIFF → INC hasta el backup elegido.',
        'Verificación de integridad, manifest.json por copia, cancelación segura y bloqueo de rutas del sistema al restaurar.',
      ],
    },
    'cuestionarios-online': {
      name: 'Cuestionarios Online',
      shortName: 'Cuestionarios Online',
      category: 'Web + IA',
      tagline: 'App pública con generación desde PDF, validación y moderación.',
      problem:
        'Plataforma educativa pública que transforma PDFs y texto en cuestionarios listos para practicar, compartir y moderar.',
      highlights: [
        'Generación de preguntas con IA (Groq) desde PDF, JSON o texto pegado.',
        'Persistencia en Neon Postgres con deduplicación por hash.',
        'Reportes, auditoría y soft delete para la moderación.',
        'CI con tests y build automático.',
      ],
      alt: 'Catálogo de Cuestionarios Online organizado por grado, curso y unidad',
    },
    'backup-scripts': {
      name: 'Backup Scripts',
      shortName: 'Backup Scripts',
      category: 'Sistemas · Bash',
      tagline: 'Copias completas e incrementales en Linux (versión Bash, rama main).',
      problem:
        'Herramientas Bash para automatizar copias completas e incrementales con snapshots, estructura por fechas y cancelación segura.',
      highlights: [
        'Backup completo comprimido en .tar.gz con inicial.sh.',
        'Incrementales basados en metadatos .snar, detectando el último snapshot.',
        'Estructura organizada por fechas para copias FULL e INC.',
        'Limpieza segura al cancelar con Ctrl+C.',
      ],
      terminal: [
        '# copia completa: origen y destino opcional',
        './inicial.sh <origen> [destino]',
        '# incremental a partir del último snapshot .snar',
        './incremental.sh <origen> [destino]',
        'tree backups/',
        'backups/',
        '├── FULL/<fecha>.tar.gz',
        '└── INC/<fecha>.tar.gz',
        '# requisitos: bash · tar · du · find',
      ],
    },
    'recordatorios-bot': {
      name: 'RecordatoriosBot',
      shortName: 'RecordatoriosBot',
      category: 'Redes · Automatización',
      tagline: 'Bot de Telegram activado por presencia en la red local.',
      problem:
        'Un bot que detecta cuándo alguien vuelve a casa y le entrega sus recordatorios pendientes justo en ese momento.',
      highlights: [
        'Detección de dispositivos conectados a la red local con arping.',
        'Envío automático del recordatorio al detectar la llegada.',
        'Gestión de recordatorios mediante comandos de Telegram.',
        'Borrado automático cuando todos los dispositivos lo han recibido.',
      ],
      diagram: {
        title: 'Flujo de RecordatoriosBot',
        localNetwork: 'Red local',
        deviceConnects: 'dispositivo se conecta',
        arping: 'arping',
        presenceDetected: 'presencia detectada',
        pythonBot: 'Bot Python',
        pendingReminders: 'recordatorios pendientes',
        telegram: 'Telegram',
        messageDelivered: 'mensaje entregado',
      },
    },
    'sistema-llamadas': {
      name: 'Sistema de llamadas Paciente–Enfermero',
      shortName: 'Sistema de llamadas',
      category: 'Full stack + infraestructura',
      tagline: 'Servidor Flask, panel web y control de relés.',
      problem:
        'Sistema completo de llamadas hospitalarias que conecta panel web, notificaciones, persistencia y control físico de relés.',
      highlights: [
        'Servidor Flask para llamadas, aceptación y presencia, con flujo pendiente → atendida → presencia.',
        'Entorno multi-contenedor con docker-compose, Nginx y MariaDB.',
        'Avisos y aceptación mediante Pushover; registro de llamadas en CSV y PDF.',
        'Control de relés al aceptar una llamada o registrar presencia.',
      ],
      diagram: {
        title: 'Arquitectura del sistema de llamadas',
        call: 'Llamada',
        patientRoom: 'habitación del paciente',
        nginx: 'Nginx',
        publishesApp: 'publica la aplicación',
        flask: 'Flask',
        callsFlow: 'llamadas, aceptación y presencia',
        mariadb: 'MariaDB',
        callLog: 'registro de llamadas',
        pushover: 'Pushover',
        staffAlert: 'aviso al personal',
        relays: 'Relés',
        physicalSignal: 'señal física',
      },
    },
  },
  systems: {
    title: 'Sistemas e infraestructura',
    intro:
      'Además de la aplicación, me ocupo de los servicios, la red y la automatización que la sostienen. Cada práctica enlaza con el proyecto donde puede comprobarse.',
    verify: 'Dónde comprobarlo',
    capabilities: {
      linux: {
        area: 'Linux & shell',
        practice:
          'Backups completos, incrementales y diferenciales con tar y snapshots .snar: primero en Bash y después como TUI en Python con detección de discos vía lsblk.',
      },
      containers: {
        area: 'Contenedores y servicios',
        practice: 'Entorno multi-servicio con docker-compose: Flask, MariaDB y Nginx publicando la aplicación.',
      },
      networking: {
        area: 'Redes',
        practice: 'Detección de presencia de dispositivos en la red local con arping.',
      },
      automation: {
        area: 'Automatización',
        practice: 'Notificaciones con Telegram y Pushover, control de relés y CI con tests y build automático.',
      },
      ai: {
        area: 'Integraciones de IA',
        practice: 'Generación de cuestionarios con Groq a partir de PDF y texto, con validación de la salida.',
      },
    },
  },
  stack: {
    title: 'Tecnologías con las que trabajo',
    intro: 'Las que más definen mi perfil, con los proyectos donde puedes comprobarlas, y el resto agrupado por área.',
    usedInOne: 'Usado en 1 proyecto',
    usedInMany: 'Usado en {n} proyectos',
    alsoWorkWith: 'También trabajo con',
    categories: {
      systems: 'Systems',
      devops: 'DevOps',
      languages: 'Lenguajes',
      frontend: 'Frontend',
      backend: 'Backend y datos',
      services: 'Servicios e IA',
      tools: 'Herramientas',
    },
    tech: {
      networking: 'Redes',
    },
  },
  contact: {
    titleLead: 'Construyamos',
    titleAccent: 'algo útil.',
    intro: 'Disponible para oportunidades de desarrollo, sistemas y automatización. Respondo directamente.',
    available: 'Disponible',
    areas: ['Desarrollo', 'Sistemas', 'Automatización'],
    write: 'Escríbeme',
    copy: 'Copiar email',
    copied: 'Copiado',
    copiedStatus: 'Email copiado',
    copyFailed: 'No se pudo copiar el email',
    backToTop: 'volver arriba',
  },
};
