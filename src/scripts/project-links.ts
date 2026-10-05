import { emit } from './events';

/**
 * Any in-page link to a project card (hero tags, 3D layers, stack, capability map…)
 * asks the carousel to open that card instead of jumping inside its horizontal track.
 * Links inside the carousel itself are handled there.
 */
document.addEventListener('click', (event) => {
  const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
  if (!link || link.closest('[data-carousel]')) return;
  const id = link.hash.slice(1);
  if (!id || !document.getElementById(id)?.matches('[data-slide]')) return;
  event.preventDefault();
  emit(document, 'project:open', { id });
});
