import { Repository } from '@/data/types/github';

export enum Constants {
  LABEL_LIMIT = 5,
  JOBS_PER_PAGE = 12,
  RELATED_JOBS = 6,
  DEFAULT_SORT = 'created_desc',
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
    owner: 'vuejs-br',
    name: 'vagas',
    category: 'frontend',
    desc: 'Espaço para divulgação de vagas relacionadas com Vue.js',
  },

  {
    owner: 'backend-br',
    name: 'vagas',
    category: 'backend',
    desc: 'Espaço para a divulgação de vagas para desenvolvedores backend via issues do Github.',
  },
  {
    owner: 'dotnetdevbr',
    name: 'vagas',
    category: 'backend',
    desc: '🔬 Espaço para divulgação de vagas para desenvolvedores .NET',
  },
  {
    owner: 'nodejsdevbr',
    name: 'vagas',
    category: 'backend',
    desc: '🔬 Espaço para divulgação de vagas para desenvolvedores Node.JS',
  },
  {
    owner: 'Gommunity',
    name: 'vagas',
    category: 'backend',
    desc: '🔬 Espaço para divulgação de vagas em Go (Golang)',
  },
  {
    owner: 'soujava',
    name: 'vagas-java',
    category: 'backend',
    desc: 'Mural de vagas para desenvolvedores Java',
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

  {
    owner: 'datascience-br',
    name: 'vagas',
    category: 'data',
    desc: '🔬 Espaço para divulgação de vagas da area de data science',
  },
];
