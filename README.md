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
| `pnpm lint`    | ESLint (TS + Astro)                |
| `pnpm format`  | Prettier (Astro + orden Tailwind)  |

## Estructura

```text
src/
  components/
    common/    Section (cabecera numerada; layout stacked/split, numeración según el menú)
    hero/      HeroVisual, InfraStack (pila 3D interactiva)
    i18n/      T (texto traducible), LanguageToggle (selector EN/ES)
    layout/    SiteHeader, SiteFooter
    profile/   Timeline (trayectoria dentro de Perfil)
    projects/  ProjectCarousel, ProjectSlide, ProjectMetadata, ProjectVisual, TuiVisual
    sections/  Hero, About, Projects, Systems, Stack, Contact
    stack/     CoreTechCard (tecnologías principales)
    systems/   SystemStatus, TerminalWindow, TerminalCommand, ArchitectureDiagram, CapabilityMap
    ui/        ButtonLink, ExternalLink, Icon, TechBadge, StatusDot
  data/        site, socialLinks, projects, capabilities, experience, skills, seo
  i18n/        config, en (fuente), es, types, translate, translate-core, project-keys
  scripts/     controladores de interacción: motion, infra-stack, hero-visual,
               project-carousel, project-links, events (eventos tipados), i18n (runtime de idioma)
  types/       project, architecture, experience, technology, site, events
  utils/       color (acentos legibles con contraste AA)
  styles/      global.css (tokens de diseño en @theme)
```

El contenido vive en `src/data/`. Para publicar un CV, asigna `cvUrl` en `src/data/site.ts`.

## Idiomas (EN por defecto, ES con un clic)

Una sola URL. El servidor renderiza en inglés; el botón EN/ES cambia el texto en el navegador sin recargar
(se conservan scroll, carrusel y estado) y la elección se recuerda en `localStorage`.

- Todo el texto vive en `src/i18n/en.ts` (fuente) y `src/i18n/es.ts`. El tipo `Dictionary` obliga a que
  ambos tengan exactamente las mismas claves: si falta una, el build falla.
- En los componentes, el texto se pinta con `<T k="seccion.clave" />` (añade `data-i18n`) y los atributos con
  `{...i18nAttrs({ 'aria-label': 'clave' })}`. Los datos de `src/data/` guardan claves tipadas, no frases.
- Variables: `"{n} of {total}"` con `vars={{ n: 1, total: 6 }}`; si la variable es a su vez traducible,
  `vars={{ name: { k: 'projects.x.name' } }}`.
- El runtime (`src/scripts/i18n.ts`) expone `translate()` para textos generados por scripts y emite el evento
  `locale:change`.
- `<T>` renderiza su propio elemento: no le pongas clases con estilos _scoped_ del componente padre; envuélvelo.

Para añadir un texto: añade la clave en `en.ts` y en `es.ts`, y úsala con `<T>`.
