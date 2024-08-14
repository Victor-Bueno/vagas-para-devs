import { NextResponse } from 'next/server';

import { GithubIssue, Repository } from '@/data/types/github';
import { REPOSITORIES } from '@/utils/constants';
import { convertGithubIssueIntoJob } from '@/utils/githubAPIUtils';

export async function GET(
  _: Request,
  { params }: { params: { owner: string; repo: string; id: string } },
) {
  const response = await fetch(
    `https://api.github.com/repos/${params.owner}/${params.repo}/issues/${params.id}`,
  );
  const responseAsJson: GithubIssue = await response.json();

  const category =
    REPOSITORIES.find(
      (item: Repository) =>
        item.owner === params.owner && item.name === params.repo,
    )?.category ?? 'other';

  return NextResponse.json(
    convertGithubIssueIntoJob(
      responseAsJson,
      category,
      params.owner,
      params.repo,
    ),
  );
}
