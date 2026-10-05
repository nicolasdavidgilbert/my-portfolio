import type { ProjectId } from '../types/project';
import type { TranslationKey } from './types';

type ProjectField = 'name' | 'shortName' | 'category' | 'tagline' | 'problem';

/** Key of a text field every project has in the dictionaries. */
export function projectKey(id: ProjectId, field: ProjectField): TranslationKey {
  return `projects.${id}.${field}`;
}

/** Keys of a project's highlights; every project defines exactly four. */
export function highlightKeys(id: ProjectId): readonly TranslationKey[] {
  return ([0, 1, 2, 3] as const).map((index): TranslationKey => `projects.${id}.highlights.${index}`);
}
