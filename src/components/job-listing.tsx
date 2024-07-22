import { PackageOpen } from 'lucide-react';

import { Job, JobCard } from './job-card';

interface JobListingProps {
  jobs: Job[];
}

export function JobListing({ jobs }: JobListingProps) {
  return (
    <div className="mb-16 flex flex-col space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

      {jobs.length === 0 && (
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
    </div>
  );
}
