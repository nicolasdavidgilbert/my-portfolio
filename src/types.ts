export type DiffLine = { type: 'add' | 'del' | 'ctx'; text: string };
export type Commit = {
  date: string;
  title: string;
  chips: string[];
  repo?: string;
  demo?: string;
  diff?: DiffLine[];
  summary: string;
  highlights: string[];
  image?: string;
  visual: 'web' | 'terminal' | 'network' | 'system';
  accent: string;
};

export interface SkillItem {
  label: string;
  icon?: string;
  href?: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}
