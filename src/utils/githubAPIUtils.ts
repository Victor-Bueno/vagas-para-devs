import { GithubIssue } from '@/data/types/github';
import { Category, Job } from '@/data/types/job';

function removeComments(input: string): string {
  return input.replace(/<!--.*?-->/g, '');
}

export function convertGithubIssueIntoJob(
  issue: GithubIssue,
  category: Category,
  repoOwner: string,
  repoName: string,
): Job {
  return {
    id: issue.id,
    issueNumber: issue.number,
    title: issue.title,
    category,
    url: issue.html_url,
    createdAt: issue.created_at,
    userName: issue.user.login,
    labels: issue.labels.map((label) => ({
      id: label.id,
      text: label.name,
      color: label.color,
    })),
    comments: issue.comments,
    body: removeComments(issue.body),
    githubUrl: issue.html_url,
    repo: {
      owner: repoOwner,
      name: repoName,
    },
  };
}
