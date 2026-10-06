import type { en } from './en';

/** Same shape as the English dictionary, with every string widened (tuples keep their length). */
type Widen<T> = T extends string ? string : { readonly [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;

type Join<P extends string, K extends string> = P extends '' ? K : `${P}.${K}`;

/** Dotted path of every leaf string, e.g. `hero.lead` or `projects.cesta-plus-plus.highlights.0`. */
type Leaves<T, P extends string = ''> = T extends string
  ? P
  : T extends readonly unknown[]
    ? { [I in keyof T & `${number}`]: Leaves<T[I], Join<P, I>> }[keyof T & `${number}`]
    : { [K in keyof T & string]: Leaves<T[K], Join<P, K>> }[keyof T & string];

export type TranslationKey = Leaves<typeof en>;

/** Interpolation values; `{ k }` is itself translated, so it follows the active locale. */
export type TranslationVars = Readonly<Record<string, string | number | { readonly k: TranslationKey }>>;

export type FlatDictionary = Readonly<Record<string, string>>;
