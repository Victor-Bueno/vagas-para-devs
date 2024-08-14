import { JobBreadcrumb } from '../job-breadcrumb';
import { SortJobsSelect } from './sort-jobs-select';

interface ListingHeaderProps {
  currentPage: string;
  previousPages: { name: string; href: string }[];
}

export function ListingHeader(props: ListingHeaderProps) {
  return (
    <div className="mb-6 mt-12 flex flex-row items-center justify-between">
      <JobBreadcrumb
        currentPage={props.currentPage}
        previousPages={props.previousPages}
      />

      <SortJobsSelect />
    </div>
  );
}
