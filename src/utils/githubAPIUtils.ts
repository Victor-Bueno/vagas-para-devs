import { GithubIssue } from '@/data/types/github';
import { Category, Job } from '@/data/types/job';

function removeLabelsSection(input: string): string {
  const labelsSectionInit = input.indexOf('## Labels');
  if (labelsSectionInit === -1) {
    return input;
  }

  const labelsSectionEnd = input.indexOf('\n## ', labelsSectionInit + 1);

  const textBeforeLabels = input.substring(0, labelsSectionInit);

  return labelsSectionEnd === -1
    ? textBeforeLabels
    : textBeforeLabels + input.substring(labelsSectionEnd);
}

function removeComments(input: string): string {
  return input.replace(/(?=<!--)([\s\S]*?)-->/g, '');
}

function formatBody(input: string): string {
  const noCommentsInput = removeComments(input);
  return removeLabelsSection(noCommentsInput);
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
    body: formatBody(issue.body),
    githubUrl: issue.html_url,
    repo: {
      owner: repoOwner,
      name: repoName,
    },
  };
}
