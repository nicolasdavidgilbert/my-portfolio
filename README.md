# nicogilbert.es

Portfolio de Nicolás David Gilbert González — desarrollo de software y administración de sistemas.

Astro + TypeScript + Tailwind CSS v4. Sitio estático; solo se envían dos scripts pequeños al cliente (menú móvil y copiar email).

## Comandos

| Comando        | Acción                             |
| :------------- | :--------------------------------- |
| `pnpm install` | Instala dependencias               |
| `pnpm dev`     | Servidor local en `localhost:4321` |
| `pnpm build`   | Genera el sitio en `./dist/`       |
| `pnpm check`   | Typecheck de `.astro` y `.ts`      |

## Estructura

```text
src/
  components/
    common/    Section (cabecera numerada de sección)
    layout/    SiteHeader, SiteFooter
    projects/  ProjectEntry, ProjectMetadata, ProjectVisual
    sections/  Hero, About, Projects, Systems, Experience, Stack, Contact
    systems/   SystemStatus, TerminalWindow, TerminalCommand, ArchitectureDiagram, CaseStudy, CapabilityMap
    ui/        ButtonLink, Icon, TechBadge, StatusDot
  data/        site, socialLinks, projects, capabilities, experience, skills, seo
  types/       project, architecture, experience, technology, site
  styles/      global.css (tokens de diseño en @theme)
```

El contenido vive en `src/data/`. Para publicar un CV, asigna `cvUrl` en `src/data/site.ts`.
