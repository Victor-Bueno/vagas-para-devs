import { PackageOpen } from 'lucide-react';

import { Job } from '@/data/types/job';

import { JobCard } from './job-card';
import { Pagination } from './pagination';

interface JobListingProps {
  jobs: Job[];
  totalPages: number;
}

export function JobListing(props: JobListingProps) {
  return (
    <div className="mb-16 flex flex-col space-y-4">
      {props.jobs.map((job) => (
        <JobCard
          key={job.id}
          category={job.category}
          title={job.title}
          labels={job.labels.map((label) => label.text)}
          date={new Date(job.createdAt)}
          comments={job.comments}
          description={job.body}
          link={`/job/${job.repo.owner}/${job.repo.name}/${job.issueNumber}`}
        />
      ))}

      {props.jobs.length === 0 && (
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-2">
          <PackageOpen
            strokeWidth={1}
            className="h-12 w-12 text-muted-foreground"
          />
          <p className="text-sm text-muted-foreground">
            Nenhuma vaga encontrada
          </p>
        </div>
      )}

      {props.jobs.length > 0 && <Pagination totalPages={props.totalPages} />}
    </div>
  );
}
