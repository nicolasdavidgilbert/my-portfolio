const SURFACE = '#15181d';
/** Text colour used on accent-filled buttons (--color-accent-contrast). */
const ON_ACCENT = '#1c1307';
const MIN_CONTRAST = 4.5;

function channels(hex: string): [number, number, number] {
  const value = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(value.slice(i, i + 2), 16)) as [number, number, number];
}

function luminance(hex: string): number {
  const [r, g, b] = channels(hex).map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  }) as [number, number, number];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}

function mixWithWhite(hex: string, amount: number): string {
  return `#${channels(hex)
    .map((c) =>
      Math.round(c + (255 - c) * amount)
        .toString(16)
        .padStart(2, '0'),
    )
    .join('')}`;
}

/**
 * Brand colours can be too dark to read as text on the dark surfaces or
 * behind dark button text. Returns the colour itself when it passes WCAG AA
 * for both, otherwise the first step towards white that does.
 */
export function readableAccent(hex: string): string {
  for (let amount = 0; amount <= 1; amount += 0.05) {
    const candidate = amount === 0 ? hex : mixWithWhite(hex, amount);
    if (contrast(candidate, SURFACE) >= MIN_CONTRAST && contrast(candidate, ON_ACCENT) >= MIN_CONTRAST)
      return candidate;
  }
  return '#ffffff';
}
