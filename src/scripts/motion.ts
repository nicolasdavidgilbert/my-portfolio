/**
 * Progressive-enhancement motion layer: scroll reveals, pointer tilt,
 * cursor spotlights, scroll progress and active-section tracking.
 * Nothing here is required to read or navigate the page.
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );

  targets.forEach((el) => observer.observe(el));
}

function initTilt(): void {
  if (reduceMotion || !finePointer) return;
  const maxDeg = 8;

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const strength = Number(el.dataset.tilt) || 1;

    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.classList.add('is-tilting');
      el.style.setProperty('--ry', `${(x * maxDeg * 2 * strength).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-y * maxDeg * 2 * strength).toFixed(2)}deg`);
    });

    el.addEventListener('pointerleave', () => {
      el.classList.remove('is-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });
}

function initSpotlight(): void {
  if (!finePointer) return;
  document.querySelectorAll<HTMLElement>('.spotlight').forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      el.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });
}

function initScrollProgress(): void {
  const bar = document.querySelector<HTMLElement>('[data-scroll-progress]');
  const parallax = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  if (!bar && parallax.length === 0) return;

  let ticking = false;
  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;

    if (reduceMotion) return;
    const viewportCenter = window.innerHeight / 2;
    for (const el of parallax) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) continue;
      const offset = (rect.top + rect.height / 2 - viewportCenter) * (Number(el.dataset.parallax) || 0.1);
      el.style.translate = `0 ${offset.toFixed(1)}px`;
    }
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}

function initActiveSection(): void {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
  const sections = links
    .map((link) => document.querySelector<HTMLElement>(link.hash))
    .filter((section): section is HTMLElement => section !== null);
  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const hash = `#${entry.target.id}`;
        links.forEach((link) => {
          if (link.hash === hash) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );

  sections.forEach((section) => observer.observe(section));
}

initReveal();
initTilt();
initSpotlight();
initScrollProgress();
initActiveSection();
