export type Category =
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'data'
  | 'qa'
  | 'other';

export interface Job {
  url: string;
  id: number;
  issueNumber: number;
  title: string;
  category: Category;
  userName: string;
  labels: {
    id: number;
    text: string;
    color: string;
  }[];
  comments: number;
  createdAt: string;
  body: string;
  repo: {
    owner: string;
    name: string;
  };
}
