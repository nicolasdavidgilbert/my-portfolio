# nicogilbert.es

Portfolio de Nicolás David Gilbert González — desarrollo de software y administración de sistemas.

Astro + TypeScript + Tailwind CSS v4. Sitio estático; el JavaScript de cliente es vanilla y se limita a la interacción (pila 3D, carrusel, animaciones, menú y copiar email).

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
    hero/      HeroVisual, InfraStack (pila 3D interactiva)
    layout/    SiteHeader, SiteFooter
    profile/   Timeline (trayectoria dentro de Perfil)
    projects/  ProjectCarousel, ProjectSlide, ProjectMetadata, ProjectVisual, TuiVisual
    sections/  Hero, About, Projects, Systems, Stack, Contact
    stack/     CoreTechCard (tecnologías principales)
    systems/   SystemStatus, TerminalWindow, TerminalCommand, ArchitectureDiagram, CapabilityMap
    ui/        ButtonLink, Icon, TechBadge, StatusDot
  data/        site, socialLinks, projects, capabilities, experience, skills, seo
  scripts/     motion (reveals, tilt, parallax, sección activa)
  types/       project, architecture, experience, technology, site
  utils/       color (acentos legibles con contraste AA)
  styles/      global.css (tokens de diseño en @theme)
```

El contenido vive en `src/data/`. Para publicar un CV, asigna `cvUrl` en `src/data/site.ts`.
