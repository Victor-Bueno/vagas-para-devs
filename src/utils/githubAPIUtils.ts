import { GithubIssue } from '@/data/types/github';
import { Category } from '@/data/types/job';

export function convertGithubIssueIntoJob(
  issue: GithubIssue,
  category: Category,
) {
  return {
    id: issue.id,
    title: issue.title,
    category,
    description: issue.body,
    url: issue.html_url,
    createdAt: issue.created_at,
    userName: issue.user.login,
    labels: issue.labels.map((label) => ({
      id: label.id,
      text: label.name,
      color: label.color,
    })),
    comments: issue.comments,
    body: issue.body,
  };
}
