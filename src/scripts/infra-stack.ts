import { emit, listen } from './events';

const scene = document.querySelector<HTMLElement>('[data-infra]');
const stack = scene?.querySelector<HTMLElement>('[data-infra-stack]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (scene && stack) {
  const layers = [...stack.querySelectorAll<HTMLAnchorElement>('[data-layer]')];
  let active: HTMLAnchorElement | null = null;

  /** Tell the rest of the hero (the terminal) which layer is being inspected. */
  const announce = (layer: HTMLAnchorElement | null) => {
    if (layer === active) return;
    active = layer;
    emit(
      scene,
      'infra:layer',
      layer
        ? {
            id: layer.dataset.layer ?? '',
            name: layer.dataset.name ?? '',
            detail: layer.dataset.detail ?? '',
            project: layer.dataset.project ?? '',
          }
        : null,
    );
  };

  layers.forEach((layer) => {
    layer.addEventListener('pointerenter', () => announce(layer));
    layer.addEventListener('focus', () => announce(layer));
    layer.addEventListener('blur', () => announce(null));
  });
  stack.addEventListener('pointerleave', () => announce(null));

  if (reduceMotion) {
    // Static stack: only the hover/focus emphasis, applied instantly.
    const apply = () => {
      const activeIndex = active ? layers.indexOf(active) : -1;
      layers.forEach((layer, i) => {
        const isActive = i === activeIndex;
        const shift = activeIndex < 0 || isActive ? 0 : i < activeIndex ? 1 : -1;
        layer.style.setProperty('--lift', isActive ? '1' : '0');
        layer.style.setProperty('--shift', String(shift));
        layer.style.setProperty('--dim', activeIndex >= 0 && !isActive ? '1' : '0');
      });
    };
    listen(scene, 'infra:layer', apply);
  } else {
    const area = scene.closest('section') ?? scene;
    const current = { rx: 0, rz: 0, spread: 0, lx: 50, ly: 30 };
    const target = { rx: 0, rz: 0, spread: 0, lx: 50, ly: 30 };
    const lift = layers.map(() => ({ value: 0, shift: 0, dim: 0 }));

    // Drag-to-spin state: `spin` is added on top of the pointer tilt.
    let spin = 0;
    let spinVelocity = 0;
    let tiltDrag = 0;
    let drag: { x: number; y: number; lastX: number; lastT: number; moved: boolean; id: number } | null = null;
    let suppressClick = false;

    let pointerActive = false;
    let visible = true;
    let frame = 0;
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;

      if (!pointerActive && !drag) {
        // Gentle idle sway so the stack never looks frozen.
        target.rx = Math.sin(now / 3100) * 3;
        target.rz = Math.sin(now / 2300) * 7;
      }

      if (!drag) {
        // Inertia after a flick, then a soft spring back to the resting angle.
        spin += spinVelocity * dt;
        spinVelocity *= Math.exp(-dt / 260);
        if (Math.abs(spinVelocity) < 0.02) spin += (0 - spin) * (1 - Math.exp(-dt / 900));
        tiltDrag += (0 - tiltDrag) * (1 - Math.exp(-dt / 500));
      }

      const ease = 1 - Math.exp(-dt / 140);
      current.rx += (target.rx - current.rx) * ease;
      current.rz += (target.rz - current.rz) * ease;
      current.lx += (target.lx - current.lx) * ease;
      current.ly += (target.ly - current.ly) * ease;
      current.spread += (target.spread - current.spread) * (1 - Math.exp(-dt / 220));

      stack.style.setProperty('--rx', `${(current.rx + tiltDrag).toFixed(3)}deg`);
      stack.style.setProperty('--rz', `${(current.rz + spin).toFixed(3)}deg`);
      stack.style.setProperty('--spread', current.spread.toFixed(4));
      stack.style.setProperty('--lx', `${current.lx.toFixed(2)}%`);
      stack.style.setProperty('--ly', `${current.ly.toFixed(2)}%`);

      // DOM order is top layer first, so a lower index means higher in the stack.
      const activeIndex = active ? layers.indexOf(active) : -1;
      const liftEase = 1 - Math.exp(-dt / 120);
      const shiftEase = 1 - Math.exp(-dt / 170);
      layers.forEach((layer, i) => {
        const state = lift[i];
        if (!state) return;
        const isActive = i === activeIndex;
        const shiftTarget = activeIndex < 0 || isActive ? 0 : i < activeIndex ? 1 : -1;
        state.value += ((isActive ? 1 : 0) - state.value) * liftEase;
        state.shift += (shiftTarget - state.shift) * shiftEase;
        state.dim += ((activeIndex >= 0 && !isActive ? 1 : 0) - state.dim) * liftEase;
        layer.style.setProperty('--lift', state.value.toFixed(4));
        layer.style.setProperty('--shift', state.shift.toFixed(4));
        layer.style.setProperty('--dim', state.dim.toFixed(4));
      });

      frame = visible ? requestAnimationFrame(step) : 0;
    };

    const start = () => {
      if (frame) return;
      last = performance.now();
      frame = requestAnimationFrame(step);
    };

    area.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse' || drag) return;
      const rect = scene.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
      const y = (event.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
      pointerActive = true;
      target.rz = Math.max(-1, Math.min(1, x * 2)) * 16;
      target.rx = Math.max(-1, Math.min(1, -y * 2)) * 9;
      // Light position in the planes' own space (they are rotated ~-40deg).
      target.lx = 50 + Math.max(-1, Math.min(1, x * 3)) * 45;
      target.ly = 40 + Math.max(-1, Math.min(1, y * 3)) * 45;
    });

    area.addEventListener('pointerleave', () => {
      pointerActive = false;
      target.spread = 0;
    });

    scene.addEventListener('pointerenter', () => (target.spread = 1));
    scene.addEventListener('pointerleave', () => {
      if (!drag) target.spread = 0;
    });

    /* ---------- drag to spin (mouse and touch) ---------- */
    scene.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) return;
      suppressClick = false;
      drag = {
        x: event.clientX,
        y: event.clientY,
        lastX: event.clientX,
        lastT: performance.now(),
        moved: false,
        id: event.pointerId,
      };
      spinVelocity = 0;
    });

    scene.addEventListener('pointermove', (event) => {
      if (!drag || event.pointerId !== drag.id) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (!drag.moved) {
        // Touch: only claim mostly-horizontal gestures so vertical scrolling still works.
        if (Math.abs(dx) < 6 || (event.pointerType !== 'mouse' && Math.abs(dy) > Math.abs(dx))) return;
        drag.moved = true;
        scene.setPointerCapture(event.pointerId);
        scene.classList.add('is-grabbing', 'has-interacted');
        target.spread = 1;
      }
      const now = performance.now();
      const deltaX = event.clientX - drag.lastX;
      spin += deltaX * 0.45;
      spinVelocity = (deltaX * 0.45) / Math.max(8, now - drag.lastT);
      tiltDrag = Math.max(-18, Math.min(18, -dy * 0.12));
      drag.lastX = event.clientX;
      drag.lastT = now;
    });

    const endDrag = () => {
      if (!drag) return;
      if (drag.moved) suppressClick = true;
      drag = null;
      scene.classList.remove('is-grabbing');
      if (!scene.matches(':hover')) target.spread = 0;
    };

    scene.addEventListener('pointerup', endDrag);
    scene.addEventListener('pointercancel', endDrag);

    // A drag must not also follow the layer link it started on.
    scene.addEventListener(
      'click',
      (event) => {
        if (!suppressClick) return;
        suppressClick = false;
        event.preventDefault();
        event.stopPropagation();
      },
      true,
    );

    layers.forEach((layer) => layer.addEventListener('pointerenter', () => scene.classList.add('has-interacted')));

    new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible) start();
    }).observe(scene);

    start();
  }
}
