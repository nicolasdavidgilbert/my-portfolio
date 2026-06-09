export type DiffLine = { type: 'add' | 'del' | 'ctx'; text: string };
export type Commit = {
  date: string; title: string; chips: string[]; repo?: string; demo?: string; diff?: DiffLine[];
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
