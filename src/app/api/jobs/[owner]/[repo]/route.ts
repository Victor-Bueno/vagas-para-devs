import { NextResponse } from 'next/server';

import { GithubIssue, Repository } from '@/data/types/github';
import { Job } from '@/data/types/job';
import { Constants, REPOSITORIES } from '@/utils/constants';
import { convertGithubIssueIntoJob } from '@/utils/githubAPIUtils';

async function fetchJobsFromRepo(
  repo: Repository,
  page: number,
  perPage: number,
) {
  const response = await fetch(
    `https://api.github.com/repos/${repo.owner}/${repo.name}/issues?state=open&per_page=${perPage}&page=${page}`,
  );

  const responseAsJson = await response.json();
  const jobs: Job[] = responseAsJson.map((issue: GithubIssue) => {
    return convertGithubIssueIntoJob(
      issue,
      repo.category,
      repo.owner,
      repo.name,
    );
  });

  const lastPage = response.headers
    .get('link')
    ?.match(/page=(\d+)>; rel="last"/)?.[1];

  return { jobs, lastPage: parseInt(lastPage || '1') };
}

export async function GET(
  request: Request,
  { params }: { params: { owner: string; repo: string } },
) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);

  const repository = REPOSITORIES.find(
    (item: Repository) =>
      item.owner === params.owner && item.name === params.repo,
  );
  if (!repository) {
    return NextResponse.error();
  }

  const fetchReponse = await fetchJobsFromRepo(
    repository,
    page,
    Constants.JOBS_PER_PAGE,
  );

  return NextResponse.json(fetchReponse);
}
