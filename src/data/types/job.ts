export interface Job {
  url: string;
  id: number;
  title: string;
  userName: string;
  labels: {
    id: number;
    text: string;
    color: string;
  }[];
  comments: number;
  createdAt: string;
  body: string;
}
