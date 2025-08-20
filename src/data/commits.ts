// src/data/commits.ts
export type DiffLine = { type: 'add' | 'del' | 'ctx'; text: string };
export type Commit = {
    hash: string; date: string; title: string; chips: string[]; repo?: string; demo?: string; diff?: DiffLine[];
};


export const commits: Commit[] = [
    {
        hash: '0f3a8c1',
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
        hash: 'a91e2f7',
        date: '2024-10-12',
        title: 'perf: Android Freelance — arranque 30% más rápido',
        chips: ['Kotlin', 'Room', 'Perf'],
        diff: [
            { type: 'ctx', text: '@@' },
            { type: 'add', text: 'refactor: feature modules dinámicos' },
            { type: 'add', text: 'chore: baseline profiles' },
            { type: 'del', text: 'chore: inicialización pesada en Application' },
        ]
    },
    {
        hash: '7b5d0aa',
        date: '2024-03-20',
        title: 'feat: Dashboard Next.js — métricas Web Vitals',
        chips: ['Next.js', 'TypeScript', 'A11y'],
        diff: [
            { type: 'ctx', text: '@@' },
            { type: 'add', text: 'feat: server components + streaming' },
            { type: 'add', text: 'feat: lighthouse >= 95' },
            { type: 'del', text: 'fix: CSS blocking render' },
        ]
    },
    {
        hash: '7b5d0aa',
        date: '2024-03-20',
        title: 'feat: Dashboard Next.js — métricas Web Vitals',
        chips: ['Next.js', 'TypeScript', 'A11y'],
        diff: [
            { type: 'ctx', text: '@@' },
            { type: 'add', text: 'feat: server components + streaming' },
            { type: 'add', text: 'feat: lighthouse >= 95' },
            { type: 'del', text: 'fix: CSS blocking render' },
        ]
    },
    {
        hash: '7b5d0aa',
        date: '2024-03-20',
        title: 'feat: Dashboard Next.js — métricas Web Vitals',
        chips: ['Next.js', 'TypeScript', 'A11y'],
        diff: [
            { type: 'ctx', text: '@@' },
            { type: 'add', text: 'feat: server components + streaming' },
            { type: 'add', text: 'feat: lighthouse >= 95' },
            { type: 'del', text: 'fix: CSS blocking render' },
        ]
    }
];


export const skills = [
    'kotlin', 'flutter', 'react-native', 'typescript', 'nextjs', 'astro', 'django', 'fastapi', 'postgresql', 'redis', 'docker', 'nginx', 'traefik', 'ci-cd', 'git'
];


export const readme = `# Hola, soy Nico\n\nDesarrollador de Aplicaciones Multiplataforma. Creo apps rápidas, accesibles y mantenibles.\n\n**Foco:** rendimiento · DX · calidad · arquitectura limpia · pruebas.\n\n**Contacto rápido:** email, GitHub y LinkedIn abajo.`;