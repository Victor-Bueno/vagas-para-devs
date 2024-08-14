import { Repository } from '@/data/types/github';

export enum Constants {
  LABEL_LIMIT = 5,
  JOBS_PER_PAGE = 12,
}

export const REPOSITORIES: Repository[] = [
  {
    owner: 'frontendbr',
    name: 'vagas',
    category: 'frontend',
    desc: '🔬 Espaço para divulgação de vagas para front-enders.',
  },
  {
    owner: 'react-brasil',
    name: 'vagas',
    category: 'frontend',
    desc: 'Espaço para divulgação de vagas relacionadas com React',
  },

  {
    owner: 'backend-br',
    name: 'vagas',
    category: 'backend',
    desc: 'Espaço para a divulgação de vagas para desenvolvedores backend via issues do Github.',
  },
  {
    owner: 'qa-brasil',
    name: 'vagas',
    category: 'qa',
    desc: '🚀 Divulgue facilmente e receba a vaga por completo no seu e-mail',
  },

  {
    owner: 'androiddevbr',
    name: 'vagas',
    category: 'mobile',
    desc: 'Mural de vagas para desenvolvedor Android.',
  },
  {
    owner: 'CocoaHeadsBrasil',
    name: 'vagas',
    category: 'mobile',
    desc: 'Espaço para divulgação de vagas para desenvolvedores iOS e macOS',
  },
  {
    owner: 'flutterbr',
    name: 'vagas',
    category: 'mobile',
    desc: '🔬 Espaço para divulgação de vagas relacionadas com Flutter e Dart.',
  },
];
