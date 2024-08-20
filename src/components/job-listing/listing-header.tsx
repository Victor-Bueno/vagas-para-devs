import { JobBreadcrumb } from '../job-breadcrumb';
import { SortJobsSelect } from './sort-jobs-select';

interface ListingHeaderProps {
  currentPage: string;
  previousPages: { name: string; href: string }[];
}

export function ListingHeader(props: ListingHeaderProps) {
  return (
    <div className="mb-6 flex flex-row flex-wrap items-center justify-between space-y-2 sm:space-y-0">
      <JobBreadcrumb
        currentPage={props.currentPage}
        previousPages={props.previousPages}
      />

      <SortJobsSelect />
    </div>
  );
}
