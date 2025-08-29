// src/data/commits.ts
export type DiffLine = { type: 'add' | 'del' | 'ctx'; text: string };
export type Commit = {
    date: string; title: string; chips: string[]; repo?: string; demo?: string; diff?: DiffLine[];
};

export const commits: Commit[] = [
    {
        date: '2025-08-27',
        title: 'chore: Sistema Llamadas Paciente–Enfermero — servidor Flask, panel web y control de relés',
        chips: ['flask', 'MariaDB', 'Docker', 'Nginx', 'Pushover'],
        repo: 'https://github.com/nicolasdavidgilbert/Sistema-de-llamadas-Paciente-Enfermero',
        diff: [
            { type: 'ctx', text: '@@' },
            { type: 'add', text: 'chore: docker-compose para Nginx y MariaDB' },
            { type: 'add', text: 'feat: servidor Flask (gunicorn) con rutas /llamada, /presencia, /enroll' },
            { type: 'add', text: 'feat: panel web estático para administración (admin/llamadas, admin/asistentes)' },
            { type: 'add', text: 'feat: notificaciones Push via Pushover con ACK y enlace de aceptación' },
            { type: 'add', text: 'feat: control de relés por IP al aceptar/registrar presencia' },
            { type: 'add', text: 'chore: scripts SQL (mariaDB/crear_tablas.sql, datos_prueba.sql)' },
            { type: 'add', text: 'feat: exportación de llamadas a CSV y PDF desde /admin/llamadas' },
            { type: 'add', text: 'fix: sincronización de estados (pendiente → atendida → presente)' },
        ]
    },
    {
        date: '2025-08-29',
        title: 'chore: Inicialización proyecto — tienda online impresiones 3D (Flet + MongoDB)',
        chips: ['Flet', 'MongoDB', 'Docker'],
        repo: 'https://github.com/impresionados/impresionados_app',
        diff: [
            { type: 'ctx', text: '@@' },
            { type: 'add', text: 'docs: guía rápida de configuración (virtualenv, instalación de dependencias)' },
            { type: 'add', text: 'chore: crear entorno virtual: python3 -m venv env; source env/bin/activate' },
            { type: 'add', text: 'chore: instalar dependencias iniciales: flet, pymongo; pip freeze > requirements.txt' },
            { type: 'add', text: 'chore: inicializar repositorio Git y push a main' },
            { type: 'add', text: 'feat: estructura de proyecto (models, views, controllers, database, utils, tests)' },
            { type: 'add', text: 'feat: configuración de base de datos con PyMongo (MongoClient + get_database)' },
            { type: 'add', text: 'feat: modelo User con save() y get_all() para usuarios' },
            { type: 'add', text: 'feat: interfaz básica con Flet (views/main_view.py) y botón Guardar' },
            { type: 'add', text: 'feat: controlador UserController.create_user para orquestar persistencia' },
            { type: 'add', text: 'chore: archivo principal main.py que lanza la app con ft.app(target=main_view)' },
            { type: 'add', text: 'docs: flujo de trabajo en equipo (feature branches, PRs, push)' },
        ]
    }
];


export const skills = [
    'kotlin', 'react', 'react-native', 'typescript', 'nextjs', 'astro', 'python', 'qt', 'tensorflow', 'flask', 'postgresql', 'mysql', 'mongo', 'docker', 'nginx', 'git'
];


export const readme = `# Hola, soy Nico

Soy Desarrollador de Aplicaciones Multiplataforma con una gran motivación por seguir aprendiendo y creciendo profesionalmente. Me apasiona crear soluciones eficientes y accesibles, y disfruto enfrentar retos que me permitan mejorar mis habilidades y aportar valor en cada proyecto. Siempre con ganas de aprender nuevas tecnologías y compartir conocimiento.

**Contacto rápido:** email, GitHub y LinkedIn abajo.`;


