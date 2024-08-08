import { NextResponse } from 'next/server';

import { GithubIssue, Repository } from '@/data/types/github';
import { Job } from '@/data/types/job';
import { REPOSITORIES } from '@/utils/constants';
import { convertGithubIssueIntoJob } from '@/utils/githubAPIUtils';

async function getJobsFromRepo(repo: Repository) {
  const response = await fetch(
    `https://api.github.com/repos/${repo.owner}/${repo.name}/issues`,
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

export async function GET() {
  const jobs = await Promise.all(REPOSITORIES.map(getJobsFromRepo));
  const allJobs = jobs.flat();
  allJobs.sort(() => Math.random() - 0.5);

  return NextResponse.json(allJobs);
}
