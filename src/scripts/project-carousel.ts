import { listen } from './events';
import { translate } from './i18n';

const root = document.querySelector<HTMLElement>('[data-carousel]');
const track = root?.querySelector<HTMLElement>('[data-track]');

if (root && track) {
  const slides = [...track.querySelectorAll<HTMLElement>('[data-slide]')];
  const cards = slides.map((slide) => slide.querySelector<HTMLElement>('[data-slide-card]'));
  const tabs = [...root.querySelectorAll<HTMLAnchorElement>('[data-tab]')];
  const bars = tabs.map((tab) => tab.querySelector<HTMLElement>('[data-bar]'));
  const prev = root.querySelector<HTMLButtonElement>('[data-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-next]');
  const toggle = root.querySelector<HTMLButtonElement>('[data-toggle]');
  const counter = root.querySelector<HTMLElement>('[data-counter]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active = -1;
  let ticking = false;
  let motionFrame = 0;

  // Stops the drag/settle animation (see "mouse drag") so it never fights another navigation.
  const stopSettle = () => {
    cancelAnimationFrame(motionFrame);
    motionFrame = 0;
    track.classList.remove('is-settling');
  };

  const goTo = (index: number, smooth = !reduceMotion) => {
    stopSettle();
    const wrapped = (index + slides.length) % slides.length;
    const target = slides[wrapped];
    if (!target) return;
    track.scrollTo({
      left: target.offsetLeft + target.offsetWidth / 2 - track.clientWidth / 2,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  /* ---------- autoplay ---------- */
  // Hovering or interacting does not pause: a manual change just restarts the countdown.
  const pause = { user: reduceMotion, drag: false, offscreen: true };

  const syncPaused = () => {
    const paused = pause.user || pause.drag || pause.offscreen || document.hidden;
    root.toggleAttribute('data-paused', paused);
  };

  const restartBar = () => {
    bars.forEach((bar) => bar?.classList.remove('is-running'));
    const bar = bars[active];
    if (!bar || reduceMotion) return;
    void bar.offsetWidth; // restart the CSS animation
    bar.classList.add('is-running');
  };

  bars.forEach((bar) => bar?.addEventListener('animationend', () => goTo(active + 1)));

  if (toggle && !reduceMotion) {
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      pause.user = !pause.user;
      root.toggleAttribute('data-paused-by-user', pause.user);
      // Keep the i18n marker in sync so a later language switch uses the right label.
      const labelKey = pause.user ? 'carousel.resume' : 'carousel.pause';
      toggle.dataset.i18nAttr = `aria-label:${labelKey}`;
      toggle.setAttribute('aria-label', translate(labelKey));
      syncPaused();
    });
  }

  document.addEventListener('visibilitychange', syncPaused);
  new IntersectionObserver(
    ([entry]) => {
      pause.offscreen = !(entry?.isIntersecting ?? false);
      syncPaused();
    },
    { threshold: 0.35 },
  ).observe(track);

  /* ---------- active slide + coverflow ---------- */
  const setActive = (index: number) => {
    if (index === active) return;
    active = index;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.setAttribute('aria-current', 'true');
        // Only scroll the tab strip horizontally; never move the page.
        const strip = tab.closest('ul');
        const item = tab.parentElement;
        if (strip && item && strip.scrollWidth > strip.clientWidth) {
          strip.scrollTo({ left: item.offsetLeft - strip.clientWidth / 2 + item.offsetWidth / 2, behavior: 'smooth' });
        }
      } else {
        tab.removeAttribute('aria-current');
      }
    });
    const slideStyle = slides[index]?.style;
    const accent = slideStyle?.getPropertyValue('--accent');
    const accentText = slideStyle?.getPropertyValue('--accent-text');
    if (accent) root.style.setProperty('--carousel-accent', accent);
    if (accentText) root.style.setProperty('--carousel-accent-text', accentText);
    if (counter) counter.textContent = String(index + 1).padStart(2, '0');
    restartBar();
  };

  const render = () => {
    ticking = false;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, i) => {
      const offset = (slide.offsetLeft + slide.offsetWidth / 2 - center) / slide.offsetWidth;
      const distance = Math.abs(offset);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }

      const card = cards[i];
      if (!card || reduceMotion) return;
      const clamped = Math.max(-1.3, Math.min(1.3, offset));
      const amount = Math.min(Math.abs(clamped), 1);
      card.style.setProperty('--turn', `${(-clamped * 38).toFixed(2)}deg`);
      card.style.setProperty('--z', `${(-amount * 260).toFixed(1)}px`);
      card.style.setProperty('--scale', (1 - amount * 0.1).toFixed(3));
      card.style.setProperty('--dim', (amount * 0.6).toFixed(3));
    });

    setActive(closest);
  };

  const schedule = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(render);
  };

  track.addEventListener('scroll', schedule, { passive: true });
  track.addEventListener('wheel', stopSettle, { passive: true });
  window.addEventListener('resize', schedule);
  prev?.addEventListener('click', () => goTo(active - 1));
  next?.addEventListener('click', () => goTo(active + 1));

  tabs.forEach((tab, i) =>
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      goTo(i);
    }),
  );

  track.addEventListener('keydown', (event) => {
    if (event.target !== track) return;
    if (event.key === 'ArrowRight') goTo(active + 1);
    else if (event.key === 'ArrowLeft') goTo(active - 1);
    else return;
    event.preventDefault();
  });

  // Keyboard users tabbing into a side slide bring it to the centre.
  track.addEventListener('focusin', (event) => {
    const slide = (event.target as Element).closest<HTMLElement>('[data-slide]');
    const index = slide ? slides.indexOf(slide) : -1;
    if (index >= 0 && index !== active) goTo(index);
  });

  /* ---------- mouse drag ---------- */
  // One animation loop drives both phases so position and speed stay continuous:
  // while dragging the track eases towards the pointer, and on release a critically
  // damped spring carries the current speed into the chosen slide without a jolt.
  const FOLLOW_MS = 40; // how quickly the track catches up with the pointer
  const SPRING = 0.011; // spring stiffness (1/ms): ~0.5s to settle, no overshoot
  const motion = { pos: 0, vel: 0, goal: 0, dragging: false, last: 0 };
  let suppressClick = false;
  let drag: { x: number; scroll: number; from: number; moved: boolean } | null = null;

  const maxScroll = () => track.scrollWidth - track.clientWidth;
  const slideLeft = (index: number) => {
    const slide = slides[index];
    return slide ? slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2 : track.scrollLeft;
  };

  const step = (now: number) => {
    const dt = Math.min(32, now - motion.last);
    motion.last = now;
    if (dt <= 0) {
      motionFrame = requestAnimationFrame(step);
      return;
    }

    if (motion.dragging) {
      const pos = motion.goal + (motion.pos - motion.goal) * Math.exp(-dt / FOLLOW_MS);
      motion.vel = motion.vel * 0.5 + ((pos - motion.pos) / dt) * 0.5;
      motion.pos = pos;
    } else {
      // Exact critically damped spring step towards motion.goal.
      const x = motion.pos - motion.goal;
      const k = motion.vel + SPRING * x;
      const decay = Math.exp(-SPRING * dt);
      motion.pos = motion.goal + (x + k * dt) * decay;
      motion.vel = (motion.vel - SPRING * k * dt) * decay;
      if (Math.abs(motion.pos - motion.goal) < 0.5 && Math.abs(motion.vel) < 0.02) {
        track.scrollLeft = motion.goal;
        stopSettle();
        return;
      }
    }

    track.scrollLeft = motion.pos;
    motionFrame = requestAnimationFrame(step);
  };

  const startMotion = () => {
    if (motionFrame) return;
    motion.last = performance.now();
    motionFrame = requestAnimationFrame(step);
  };

  track.addEventListener('pointerdown', (event) => {
    suppressClick = false;
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    if ((event.target as Element).closest('a, button')) return;
    // Grabbing a card mid-glide keeps its current position and speed.
    const gliding = motionFrame !== 0;
    if (!gliding) {
      motion.pos = track.scrollLeft;
      motion.vel = 0;
    }
    drag = { x: event.clientX, scroll: gliding ? motion.pos : track.scrollLeft, from: active, moved: false };
  });

  track.addEventListener('pointermove', (event) => {
    if (!drag) return;
    const dx = event.clientX - drag.x;
    if (!drag.moved && Math.abs(dx) > 4) {
      // Capture only once it is a real drag, so plain clicks still reach the card.
      drag.moved = true;
      track.setPointerCapture(event.pointerId);
      track.classList.add('is-dragging');
      motion.dragging = true;
      pause.drag = true;
      syncPaused();
      startMotion();
    }
    if (drag.moved) motion.goal = Math.max(0, Math.min(maxScroll(), drag.scroll - dx));
  });

  const endDrag = (event: PointerEvent) => {
    if (!drag) return;
    const { moved, x, from } = drag;
    drag = null;
    if (!moved) return;

    // The click that follows a drag must not select or open anything.
    suppressClick = true;

    // Let the release speed carry forward and settle on the slide closest to where it would land.
    const vel = Math.max(-4, Math.min(4, motion.vel));
    const projected = motion.goal + vel * 220 + track.clientWidth / 2;
    let target = active;
    let best = Infinity;
    slides.forEach((slide, i) => {
      const d = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - projected);
      if (d < best) {
        best = d;
        target = i;
      }
    });
    // A short flick still moves one slide.
    const dx = event.clientX - x;
    if (target === from && Math.abs(dx) > 60) target = from + (dx < 0 ? 1 : -1);
    target = Math.max(0, Math.min(slides.length - 1, target));

    // Snapping stays off until the spring has landed, so the browser never jumps.
    track.classList.add('is-settling');
    track.classList.remove('is-dragging');
    motion.dragging = false;
    pause.drag = false;
    syncPaused();
    motion.goal = slideLeft(target);
    if (reduceMotion) {
      track.scrollLeft = motion.goal;
      stopSettle();
    } else startMotion();
  };

  // Clicking or tapping a side card (even on one of its links) brings it to the centre first.
  track.addEventListener(
    'click',
    (event) => {
      if (suppressClick) {
        suppressClick = false;
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      const slide = (event.target as Element).closest<HTMLElement>('[data-slide]');
      const index = slide ? slides.indexOf(slide) : -1;
      if (index < 0 || index === active) return;
      event.preventDefault();
      event.stopPropagation();
      goTo(index);
    },
    true,
  );

  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  /* ---------- requests to open a card (see project-links.ts) ---------- */
  const section = root.closest('section');
  const indexForHash = (hash: string) => slides.findIndex((slide) => `#${slide.id}` === hash);

  listen(document, 'project:open', ({ id }) => {
    const index = indexForHash(`#${id}`);
    if (index < 0) return;
    // Bring the projects section into view and centre that card instead of jumping into the track.
    section?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    goTo(index);
    history.replaceState(null, '', `#${id}`);
  });

  render();
  syncPaused();

  const initial = indexForHash(window.location.hash);
  if (initial >= 0) {
    requestAnimationFrame(() => {
      section?.scrollIntoView({ block: 'start' });
      goTo(initial, false);
    });
  }
}
