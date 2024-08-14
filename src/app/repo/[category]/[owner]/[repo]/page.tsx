import { JobListing } from '@/components/job-listing';
import { api } from '@/data/api';
import { Job } from '@/data/types/job';

async function getJobs(owner: string, repo: string, page: number) {
  const response = await api(`/jobs/${owner}/${repo}?page=${page}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const jobs = await response.json();

  return jobs;
}

export default async function RepoJobsPage({
  params,
  searchParams,
}: {
  params: { category: string; owner: string; repo: string };
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const { jobs, lastPage }: { jobs: Job[]; lastPage: number } = await getJobs(
    params.owner,
    params.repo,
    currentPage,
  );

  return (
    <div>
      <JobListing jobs={jobs} totalPages={lastPage} />
    </div>
  );
}
