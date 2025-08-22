// src/data/commits.ts
export type DiffLine = { type: 'add' | 'del' | 'ctx'; text: string };
export type Commit = {
    date: string; title: string; chips: string[]; repo?: string; demo?: string; diff?: DiffLine[];
};

export const commits: Commit[] = [
    {
        date: '2025-04-01',
        title: 'feat: TCG Events Manager — Panel admin en tiempo real, auth y CI/CD',
        chips: ['Flutter', 'Supabase', 'Realtime', 'CI/CD'],
        repo: '#', demo: '#',
        diff: [
            { type: 'ctx', text: '@@' },
            { type: 'add', text: 'feat: autenticación con Supabase y roles' },
            { type: 'add', text: 'feat: dashboard realtime para partidas y usuarios' },
            { type: 'add', text: 'chore: pipeline GitHub Actions (build, test, release)' },
            { type: 'del', text: 'fix: polling manual → eliminado (suscripciones)' },
        ]
    },
    {
        date: '2024-10-12',
        title: 'perf: Android Freelance — arranque 30% más rápido',
        chips: ['Kotlin', 'Room', 'Perf'],
        diff: [
            { type: 'ctx', text: '@@' },
            { type: 'add', text: 'refactor: feature modules dinámicos' },
            { type: 'add', text: 'chore: baseline profiles' },
            { type: 'del', text: 'chore: inicialización pesada en Application' },
        ]
    }
];


export const skills = [
    'kotlin', 'react', 'react-native', 'typescript', 'nextjs', 'astro', 'python', 'qt', 'tensorflow', 'flask', 'postgresql', 'mysql', 'mongo', 'docker', 'nginx', 'git'
];


export const readme = `# Hola, soy Nico\n\nDesarrollador de Aplicaciones Multiplataforma. Creo apps rápidas, accesibles y mantenibles.\n\n**Foco:** rendimiento · DX · calidad · arquitectura limpia · pruebas.\n\n**Contacto rápido:** email, GitHub y LinkedIn abajo.`;
