/**
 * English dictionary: the default locale and the source of truth for the shape.
 * `es.ts` must provide exactly the same keys (enforced by the `Dictionary` type).
 */
export const en = {
  meta: {
    title: 'Nicolás Gilbert — Software Developer & Systems Administrator',
    description:
      'Portfolio of Nicolás David Gilbert González. I build full stack applications and run the infrastructure behind them: Linux, networking, Docker, automation and AI integrations.',
  },
  a11y: {
    skip: 'Skip to content',
    newTab: '(opens in a new tab)',
    mainNav: 'Main',
    mobileNav: 'Main (mobile)',
    menu: 'Navigation menu',
    language: 'Language',
  },
  person: {
    role: 'Software developer and systems administrator',
    location: 'Canary Islands, Spain',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    systems: 'Systems',
    stack: 'Stack',
    contact: 'Contact',
  },
  hero: {
    available: 'Open to opportunities',
    titleFirst: 'Software Developer',
    titleSecond: 'Systems Administrator.',
    lead: 'I build complete applications and run the infrastructure that keeps them going. I combine development, Linux, networking and AI integration with a practical product mindset.',
    viewProjects: 'View projects',
  },
  heroVisual: {
    focusWords: ['applications', 'infrastructure', 'automation', 'networking'],
    focusAll: 'applications, infrastructure, automation, networking',
    tagsLabel: 'Featured technologies',
    viewTag: ': view {project}',
    tags: {
      linux: 'Linux Backup TUI',
      docker: 'Patient–Nurse Call System (docker-compose)',
      typescript: 'Cesta++ (Next.js + TypeScript)',
    },
  },
  infra: {
    navLabel: 'Stack layers: go to the project behind each one',
    hint: 'drag to rotate · hover over a layer',
    view: ': view {project}',
    layers: {
      apps: 'Apps',
      services: 'Services',
      network: 'Network',
      linux: 'Linux',
    },
  },
  status: {
    available: 'available',
    unavailable: 'unavailable',
  },
  about: {
    title: 'From code to the infrastructure that runs it.',
    intro:
      'My profile connects product development and operations. I can work from the interface and the backend all the way to deployment, networking and the automation that make a solution genuinely usable.',
    pillars: {
      development:
        'I build frontend and backend applications and complete products, from the interface to the database.',
      systems: 'I administer Linux, services, networks, containers and infrastructure.',
      automation: 'I automate deployments, repetitive tasks, services and integrations, AI ones included.',
    },
    journeyLabel: 'Journey',
    journeyTitle: 'Education and experience',
    statusLabel: 'Current status',
  },
  journey: {
    asir: {
      period: 'In progress',
      title: 'Networked Computer Systems Administration',
      organization: 'ASIR',
      description: 'Linux administration, networking, containers, services and reproducible deployments.',
    },
    erasmus: {
      period: 'International experience',
      title: 'Erasmus+ in Bulgaria',
      organization: 'Technical leadership with AI',
      description: 'I led the implementation of an AI agent for sales prospecting.',
    },
    dam: {
      period: 'Qualification',
      title: 'Multiplatform Application Development',
      organization: 'DAM',
      description: 'Foundation in applications, databases, interfaces and software architecture.',
    },
  },
  projectsSection: {
    title: 'Selected projects',
    intro: 'Web products and systems tools, all with public code. Swipe, use the arrows or pick one below.',
  },
  carousel: {
    roleCarousel: 'carousel',
    roleSlide: 'slide',
    regionLabel: 'Selected projects',
    slideLabel: '{n} of {total}',
    pause: 'Pause autoplay',
    resume: 'Resume autoplay',
    previous: 'Previous project',
    next: 'Next project',
    tabsLabel: 'Go to a project',
  },
  projectUi: {
    demo: 'Demo',
    code: 'Code',
    ofProject: ' of {name}',
    stackOf: '{name} stack',
    tuiLabel: 'Terminal interface of {name}',
  },
  projects: {
    'cesta-plus-plus': {
      name: 'Cesta++',
      shortName: 'Cesta++',
      category: 'Web application',
      tagline: 'Real-time collaborative shopping lists.',
      problem:
        'Shared shopping lists that sync changes instantly and keep products, prices and invitations in a single flow.',
      highlights: [
        'Realtime sync of changes to shared lists.',
        'Email/OAuth authentication with InsForge.',
        'Invitations via a token link (/invite/[token]).',
        'Product catalogue with price history.',
      ],
      alt: "Cesta++ dashboard showing the user's shopping lists",
    },
    'linux-backup-tui': {
      name: 'Linux Backup TUI',
      shortName: 'Linux Backup TUI',
      category: 'Systems · Python TUI',
      tagline: 'Full, incremental and differential backups from the terminal.',
      problem:
        'A Python evolution of Backup Scripts: a curses interface that detects external drives, creates full, incremental or differential backups with tar and automatically restores the required chain.',
      highlights: [
        'External drive detection with lsblk (USB, removable drives and mount points under /media or /mnt).',
        'Full, incremental and differential backups with tar --listed-incremental and .snar snapshots.',
        'Restoration that rebuilds the FULL → DIFF → INC chain up to the chosen backup.',
        'Integrity checks, a manifest.json per backup, safe cancellation and system paths blocked as restore targets.',
      ],
    },
    'cuestionarios-online': {
      name: 'Cuestionarios Online',
      shortName: 'Cuestionarios Online',
      category: 'Web + AI',
      tagline: 'Public app with quiz generation from PDFs, validation and moderation.',
      problem:
        'Public educational platform that turns PDFs and text into quizzes ready for practice, sharing and moderation.',
      highlights: [
        'AI question generation (Groq) from PDF, JSON or pasted text.',
        'Persistence in Neon Postgres with hash-based deduplication.',
        'Reports, auditing and soft delete for moderation.',
        'CI with tests and automated builds.',
      ],
      alt: 'Cuestionarios Online catalogue organised by grade, course and unit',
    },
    'backup-scripts': {
      name: 'Backup Scripts',
      shortName: 'Backup Scripts',
      category: 'Systems · Bash',
      tagline: 'Full and incremental backups on Linux (Bash version, main branch).',
      problem:
        'Bash tools to automate full and incremental backups with snapshots, a date-based structure and safe cancellation.',
      highlights: [
        'Full compressed .tar.gz backup with inicial.sh.',
        'Incrementals based on .snar metadata, detecting the latest snapshot.',
        'Date-organised structure for FULL and INC backups.',
        'Safe cleanup when cancelling with Ctrl+C.',
      ],
      terminal: [
        '# full backup: source and optional destination',
        './inicial.sh <source> [destination]',
        '# incremental from the latest .snar snapshot',
        './incremental.sh <source> [destination]',
        'tree backups/',
        'backups/',
        '├── FULL/<date>.tar.gz',
        '└── INC/<date>.tar.gz',
        '# requirements: bash · tar · du · find',
      ],
    },
    'recordatorios-bot': {
      name: 'RecordatoriosBot',
      shortName: 'RecordatoriosBot',
      category: 'Networking · Automation',
      tagline: 'Telegram bot triggered by presence on the local network.',
      problem: 'A bot that detects when someone gets home and delivers their pending reminders right at that moment.',
      highlights: [
        'Detection of devices connected to the local network with arping.',
        'Automatic reminder delivery when an arrival is detected.',
        'Reminder management through Telegram commands.',
        'Automatic deletion once every device has received it.',
      ],
      diagram: {
        title: 'RecordatoriosBot flow',
        localNetwork: 'Local network',
        deviceConnects: 'device connects',
        arping: 'arping',
        presenceDetected: 'presence detected',
        pythonBot: 'Python bot',
        pendingReminders: 'pending reminders',
        telegram: 'Telegram',
        messageDelivered: 'message delivered',
      },
    },
    'sistema-llamadas': {
      name: 'Patient–Nurse Call System',
      shortName: 'Call system',
      category: 'Full stack + infrastructure',
      tagline: 'Flask server, web dashboard and relay control.',
      problem:
        'Complete hospital call system connecting a web dashboard, notifications, persistence and physical relay control.',
      highlights: [
        'Flask server for calls, acceptance and presence, with a pending → attended → presence flow.',
        'Multi-container environment with docker-compose, Nginx and MariaDB.',
        'Alerts and acceptance via Pushover; call log in CSV and PDF.',
        'Relay control when a call is accepted or presence is registered.',
      ],
      diagram: {
        title: 'Call system architecture',
        call: 'Call',
        patientRoom: "patient's room",
        nginx: 'Nginx',
        publishesApp: 'publishes the app',
        flask: 'Flask',
        callsFlow: 'calls, acceptance and presence',
        mariadb: 'MariaDB',
        callLog: 'call log',
        pushover: 'Pushover',
        staffAlert: 'staff alert',
        relays: 'Relays',
        physicalSignal: 'physical signal',
      },
    },
  },
  systems: {
    title: 'Systems and infrastructure',
    intro:
      'Beyond the application, I take care of the services, network and automation that keep it running. Each practice links to the project where you can check it.',
    verify: 'Where to check it',
    capabilities: {
      linux: {
        area: 'Linux & shell',
        practice:
          'Full, incremental and differential backups with tar and .snar snapshots: first in Bash and later as a Python TUI with drive detection via lsblk.',
      },
      containers: {
        area: 'Containers and services',
        practice: 'Multi-service environment with docker-compose: Flask, MariaDB and Nginx publishing the application.',
      },
      networking: {
        area: 'Networking',
        practice: 'Detection of device presence on the local network with arping.',
      },
      automation: {
        area: 'Automation',
        practice: 'Notifications with Telegram and Pushover, relay control and CI with tests and automated builds.',
      },
      ai: {
        area: 'AI integrations',
        practice: 'Quiz generation with Groq from PDF and text, with output validation.',
      },
    },
  },
  stack: {
    title: 'Technologies I work with',
    intro:
      'The ones that define my profile most, with the projects where you can check them, and the rest grouped by area.',
    usedInOne: 'Used in 1 project',
    usedInMany: 'Used in {n} projects',
    alsoWorkWith: 'I also work with',
    categories: {
      systems: 'Systems',
      devops: 'DevOps',
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend and data',
      services: 'Services and AI',
      tools: 'Tools',
    },
    tech: {
      networking: 'Networking',
    },
  },
  contact: {
    titleLead: "Let's build",
    titleAccent: 'something useful.',
    intro: 'Open to development, systems and automation opportunities. I reply directly.',
    available: 'Available',
    areas: ['Development', 'Systems', 'Automation'],
    write: 'Email me',
    copy: 'Copy email',
    copied: 'Copied',
    copiedStatus: 'Email copied',
    copyFailed: 'Could not copy the email',
    backToTop: 'back to top',
  },
} as const;
