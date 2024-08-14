import { PackageOpen } from 'lucide-react';

import { Job } from '@/data/types/job';
import { getCategoryName } from '@/utils/styles';

import { Pagination } from '../pagination';
import { JobCard } from './job-card';
import { ListingHeader } from './listing-header';

interface JobListingProps {
  jobs: Job[];
  totalPages: number;
}

export function JobListing(props: JobListingProps) {
  return (
    <>
      <ListingHeader
        currentPage={props.jobs[0].repo.owner + '/' + props.jobs[0].repo.name}
        previousPages={[
          {
            name: getCategoryName(props.jobs[0].category),
            href: `/repo/${props.jobs[0].category}`,
          },
        ]}
      />
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
    </>
  );
}
