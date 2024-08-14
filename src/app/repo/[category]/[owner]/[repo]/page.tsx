import { JobListing } from '@/components/job-listing';
import { api } from '@/data/api';
import { Job } from '@/data/types/job';
import { Constants } from '@/utils/constants';

async function getJobs(
  owner: string,
  repo: string,
  page: number,
  sort: string,
) {
  const response = await api(
    `/jobs/${owner}/${repo}?page=${page}&sort=${sort}`,
    {
      next: {
        revalidate: 60 * 60, // 1 hour
      },
    },
  );

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
    sort?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const currentSort = searchParams?.sort || Constants.DEFAULT_SORT;
  const { jobs, lastPage }: { jobs: Job[]; lastPage: number } = await getJobs(
    params.owner,
    params.repo,
    currentPage,
    currentSort,
  );

  return (
    <div>
      <JobListing jobs={jobs} totalPages={lastPage} />
    </div>
  );
}
