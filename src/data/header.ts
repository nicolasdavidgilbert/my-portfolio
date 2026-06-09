export interface RepoHeaderProps {
  repoUrl: string;
  author?: string;
  role?: string;
}

export interface RepoInfo {
  owner: string;
  repo: string;
}

export function getRepoInfo(repoUrl: string): RepoInfo {
  const path = repoUrl?.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '') ?? '';
  const [owner = 'nicolasdavidgilbert', repo = 'portfolio'] = path.split('/');
  return { owner, repo };
}

export const DEFAULT_AUTHOR = 'Nicolás David Gilbert González';
export const DEFAULT_ROLE = 'Desarrollador Multiplataforma';
