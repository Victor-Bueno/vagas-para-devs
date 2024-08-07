import { Repository } from '@/data/types/github';

export enum Constants {
  LABEL_LIMIT = 5,
}

export const REPOSITORIES: Repository[] = [
  {
    owner: 'frontendbr',
    name: 'vagas',
    category: 'frontend',
  },
  {
    owner: 'backend-br',
    name: 'vagas',
    category: 'backend',
  },
  {
    owner: 'qa-brasil',
    name: 'vagas',
    category: 'qa',
  },

  {
    owner: 'androiddevbr',
    name: 'vagas',
    category: 'mobile',
  },
  {
    owner: 'CocoaHeadsBrasil',
    name: 'vagas',
    category: 'mobile',
  },
  {
    owner: 'flutterbr',
    name: 'vagas',
    category: 'mobile',
  },
  {
    owner: 'react-brasil',
    name: 'vagas',
    category: 'mobile',
  },
];
