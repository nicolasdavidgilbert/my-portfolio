import { listen } from './events';

const swap = document.querySelector<HTMLElement>('[data-terminal-swap]');
const inspectId = swap?.querySelector<HTMLElement>('[data-inspect-id]');
const inspectDetail = swap?.querySelector<HTMLElement>('[data-inspect-detail]');
const inspectProject = swap?.querySelector<HTMLElement>('[data-inspect-project]');

let inspectedLayer: string | null = null;

// The 3D stack reports which layer is inspected; the terminal mirrors it.
listen(document, 'infra:layer', (layer) => {
  if (!swap) return;
  inspectedLayer = layer?.id ?? null;
  if (layer) {
    if (inspectId) inspectId.textContent = layer.id;
    if (inspectDetail) inspectDetail.textContent = layer.detail;
    if (inspectProject) inspectProject.textContent = layer.project;
  }
  swap.classList.toggle('is-inspecting', Boolean(layer));
});

// Switching language while a layer is inspected refreshes the (translated) project name.
listen(document, 'locale:change', () => {
  if (!inspectedLayer || !inspectProject) return;
  const layer = document.querySelector<HTMLElement>(`[data-layer="${inspectedLayer}"]`);
  inspectProject.textContent = layer?.dataset.project ?? '';
});

const visual = document.querySelector<HTMLElement>('[data-hero-visual]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (visual && !reduceMotion) {
  // Tags and terminal drift at different depths with the pointer; CSS transitions do the easing.
  const area = visual.closest('section') ?? visual;
  area.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    visual.style.setProperty('--px', (x * 2).toFixed(3));
    visual.style.setProperty('--py', (y * 2).toFixed(3));
  });
  area.addEventListener('pointerleave', () => {
    visual.style.setProperty('--px', '0');
    visual.style.setProperty('--py', '0');
  });
}
