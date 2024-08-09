import { NextResponse } from 'next/server';

import { GithubIssue, Repository } from '@/data/types/github';
import { Job } from '@/data/types/job';
import { Constants, REPOSITORIES } from '@/utils/constants';
import { convertGithubIssueIntoJob } from '@/utils/githubAPIUtils';

async function getJobsFromRepo(
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

  return jobs;
}

async function getLastPageFromRepo(repo: Repository): Promise<number> {
  const response = await fetch(
    `https://api.github.com/repos/${repo.owner}/${repo.name}/issues?state=open&per_page=1`,
  );

  const linkHeader = response.headers.get('link');
  if (linkHeader) {
    const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
    if (match) {
      return parseInt(match[1], 10);
    }
  }

  return 1;
}

function calculatePerPageValues(
  totalJobsPerPage: number,
  numRepos: number,
): number[] {
  const basePerPage = Math.floor(totalJobsPerPage / numRepos);
  const extraJobs = totalJobsPerPage % numRepos;

  const perPageValues = Array(numRepos).fill(basePerPage);
  for (let i = 0; i < extraJobs; i++) {
    perPageValues[i]++;
  }

  return perPageValues;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);

  const perPageValues = calculatePerPageValues(
    Constants.JOBS_PER_PAGE,
    REPOSITORIES.length,
  );

  const jobs = await Promise.all(
    REPOSITORIES.map((repo, index) =>
      getJobsFromRepo(repo, page, perPageValues[index]),
    ),
  );

  const allJobs = jobs.flat();

  const lastPages = await Promise.all(REPOSITORIES.map(getLastPageFromRepo));
  const totalJobs = lastPages.reduce(
    (sum, lastPage) => sum + lastPage * Constants.JOBS_PER_PAGE,
    0,
  );
  const lastPage = Math.ceil(totalJobs / Constants.JOBS_PER_PAGE);

  return NextResponse.json({ jobs: allJobs, lastPage });
}
