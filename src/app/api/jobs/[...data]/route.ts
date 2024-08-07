import { NextResponse } from 'next/server';

import { GithubIssue, Repository } from '@/data/types/github';
import { REPOSITORIES } from '@/utils/constants';
import { convertGithubIssueIntoJob } from '@/utils/githubAPIUtils';

export async function GET(
  _: Request,
  { params }: { params: { data: string[] } },
) {
  const [owner, repo, id] = params.data;

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues/${id}`,
  );
  const responseAsJson: GithubIssue = await response.json();

  const category =
    REPOSITORIES.find(
      (item: Repository) => item.owner === owner && item.name === repo,
    )?.category ?? 'other';

  return NextResponse.json(
    convertGithubIssueIntoJob(responseAsJson, category, owner, repo),
  );
}
