import { NextResponse } from 'next/server';

import { GithubIssue } from '@/data/types/githubIssue';
import { Job } from '@/data/types/job';

export async function GET() {
  const response = await fetch(
    'https://api.github.com/repos/frontendbr/vagas/issues',
  );

  const responseAsJson = await response.json();
  const jobs: Job[] = responseAsJson.map((job: GithubIssue) => ({
    id: job.id,
    title: job.title,
    description: job.body,
    url: job.html_url,
    createdAt: job.created_at,
    userName: job.user.login,
    labels: job.labels.map((label) => ({
      id: label.id,
      text: label.name,
      color: label.color,
    })),
    comments: job.comments,
    body: job.body,
  }));

  return NextResponse.json(jobs);
}
