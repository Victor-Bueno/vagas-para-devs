import { Repository } from '@/data/types/github';

export enum Constants {
  LABEL_LIMIT = 5,
}

export const REPOSITORIES: Repository[] = [
  {
    repo: 'frontendbr/vagas',
    category: 'frontend',
  },
  {
    repo: 'backend-br/vagas',
    category: 'backend',
  },
  {
    repo: 'qa-brasil/vagas',
    category: 'qa',
  },

  {
    repo: 'androiddevbr/vagas',
    category: 'mobile',
  },
  {
    repo: 'CocoaHeadsBrasil/vagas',
    category: 'mobile',
  },
  {
    repo: 'flutterbr/vagas',
    category: 'mobile',
  },
  {
    repo: 'react-brasil/vagas',
    category: 'mobile',
  },
];
