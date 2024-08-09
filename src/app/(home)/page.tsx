import { Filters } from '@/components/filters';
import { JobListing } from '@/components/job-listing';
import { Separator } from '@/components/ui/separator';
import { api } from '@/data/api';
import { Job } from '@/data/types/job';

async function getJobs(page: number) {
  const response = await api(`/jobs?page=${page}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const jobs = await response.json();

  return jobs;
}

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const { jobs, lastPage }: { jobs: Job[]; lastPage: number } =
    await getJobs(currentPage);

  return (
    <>
      <div className="my-24 flex w-full justify-center">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-4xl font-semibold">
            Encontre Vagas de <br /> Emprego para Devs
          </h1>
          <Separator className="my-5 h-1 max-w-48 bg-primary" />
          <p className="text-muted-foreground">
            Coleção de vagas de emprego para desenvolvedores de software
            reunidas de diferentes repositórios abastecidos pela comunidade
            brasileira.
          </p>
        </div>
      </div>

      <Filters />

      <JobListing jobs={jobs} totalPages={lastPage} />
    </>
  );
}
