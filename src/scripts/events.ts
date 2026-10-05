import type { AppEvents } from '../types/events';

export function emit<K extends keyof AppEvents>(target: EventTarget, type: K, detail: AppEvents[K]): void {
  target.dispatchEvent(new CustomEvent(type, { bubbles: true, detail }));
}

export function listen<K extends keyof AppEvents>(
  target: EventTarget,
  type: K,
  handler: (detail: AppEvents[K]) => void,
): void {
  target.addEventListener(type, (event) => handler((event as CustomEvent<AppEvents[K]>).detail));
}
