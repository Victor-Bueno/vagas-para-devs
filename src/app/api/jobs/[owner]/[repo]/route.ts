import { NextResponse } from 'next/server';

import { GithubIssue, Repository } from '@/data/types/github';
import { Job } from '@/data/types/job';
import { Constants, REPOSITORIES } from '@/utils/constants';
import { convertGithubIssueIntoJob } from '@/utils/githubAPIUtils';

async function fetchJobsFromRepo(
  repo: Repository,
  page: number,
  perPage: number,
  sortMethod: string,
  sortDirection: string,
) {
  console.log(sortDirection);
  const response = await fetch(
    `https://api.github.com/repos/${repo.owner}/${repo.name}/issues?state=open&per_page=${perPage}&page=${page}&sort=${sortMethod}&direction=${sortDirection}`,
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

  const linkHeader = response.headers.get('link');
  const lastLink = linkHeader
    ?.split(',')
    .find((link) => link.includes('rel="last"'));

  const lastPageMatch = lastLink?.match(/(\?|&)page=(\d+)/)?.[0];
  const lastPage = lastPageMatch?.split('=')[1] || '1';

  return { jobs, lastPage: parseInt(lastPage) };
}

export async function GET(
  request: Request,
  { params }: { params: { owner: string; repo: string } },
) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const perPage = parseInt(
    url.searchParams.get('per_page') || String(Constants.JOBS_PER_PAGE),
    10,
  );
  const sort = url.searchParams.get('sort') || Constants.DEFAULT_SORT;

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
    perPage,
    sort.split('_')[0],
    sort.split('_')[1],
  );

  return NextResponse.json(fetchReponse);
}
