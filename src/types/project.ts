import type { ArchitectureDiagram } from './architecture';

/** Software projects and systems projects alternate visually in the list. */
export type ProjectKind = 'software' | 'systems';

export interface ScreenshotVisual {
  readonly type: 'screenshot';
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface TerminalVisual {
  readonly type: 'terminal';
  readonly title: string;
  readonly lines: readonly TerminalLine[];
}

export interface DiagramVisual {
  readonly type: 'diagram';
  readonly diagram: ArchitectureDiagram;
}

/** A curses-style interface mock built from the strings the app really renders. */
export interface TuiVisual {
  readonly type: 'tui';
  readonly title: string;
  readonly devicesTitle: string;
  readonly devices: readonly { readonly label: string; readonly mountpoint: string }[];
  readonly fields: readonly { readonly label: string; readonly value: string }[];
  readonly button: string;
  readonly log: readonly string[];
  readonly hint: string;
}

export type ProjectVisual = ScreenshotVisual | TerminalVisual | DiagramVisual | TuiVisual;

export type TerminalLine =
  | { readonly kind: 'command'; readonly text: string }
  | { readonly kind: 'output'; readonly text: string }
  | { readonly kind: 'comment'; readonly text: string };

export interface Project {
  readonly id: string;
  readonly name: string;
  /** Compact name for tight spots such as technology tiles. */
  readonly shortName?: string;
  readonly kind: ProjectKind;
  readonly category: string;
  readonly tagline: string;
  readonly problem: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
  /** YYYY-MM */
  readonly date: string;
  readonly repo: string;
  readonly demo?: string;
  /** Ambient colour used by the carousel when this project is active. */
  readonly accent: string;
  readonly visual: ProjectVisual;
}
