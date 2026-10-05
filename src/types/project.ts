import type { en } from '../i18n/en';
import type { TranslationKey } from '../i18n/types';
import type { ArchitectureDiagram } from './architecture';

/** Project ids; each one has its texts under `projects.<id>` in the dictionaries. */
export type ProjectId = keyof typeof en.projects;

/** Software projects and systems projects alternate visually in the list. */
export type ProjectKind = 'software' | 'systems';

export interface ScreenshotVisual {
  readonly type: 'screenshot';
  readonly src: string;
  readonly alt: TranslationKey;
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

/**
 * A curses-style interface mock built from the strings the app really renders.
 * Not translated: it reproduces the real (Spanish) UI of the tool.
 */
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

/** A terminal line is either translatable (`text`) or literal code shown as is (`raw`). */
export type TerminalLine = { readonly kind: 'command' | 'output' | 'comment' } & (
  { readonly text: TranslationKey } | { readonly raw: string }
);

/** Structural data only; name, category, tagline, problem and highlights live in the dictionaries. */
export interface Project {
  readonly id: ProjectId;
  readonly kind: ProjectKind;
  readonly stack: readonly string[];
  /** YYYY-MM */
  readonly date: string;
  readonly repo: string;
  readonly demo?: string;
  /** Ambient colour used by the carousel when this project is active. */
  readonly accent: string;
  readonly visual: ProjectVisual;
}
