import { NextResponse } from 'next/server';

import { GithubIssue } from '@/data/types/github';
import { Category, Job } from '@/data/types/job';
import { REPOSITORIES } from '@/utils/constants';
import { convertGithubIssueIntoJob } from '@/utils/githubAPIUtils';

async function getJobsFromRepo(repo: string, category: Category) {
  const response = await fetch(`https://api.github.com/repos/${repo}/issues`);

  const responseAsJson = await response.json();
  const jobs: Job[] = responseAsJson.map((issue: GithubIssue) =>
    convertGithubIssueIntoJob(issue, category),
  );

  return jobs;
}

export async function GET() {
  const jobs = await Promise.all(
    REPOSITORIES.map((item) => getJobsFromRepo(item.repo, item.category)),
  );
  const allJobs = jobs.flat();

  return NextResponse.json(allJobs);
}
