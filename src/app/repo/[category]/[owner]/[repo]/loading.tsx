import { Skeleton } from '@/components/ui/skeleton';
import { Constants } from '@/utils/constants';

export default function LoadingRepoJobsPage() {
  return (
    <div className="pt-8 sm:pt-16">
      <div className="mb-6 flex flex-row flex-wrap items-center justify-between space-y-2 sm:space-y-0">
        <Skeleton className="h-8 w-2/3 sm:w-1/3" />
        <Skeleton className="h-10 w-full sm:w-1/5" />
      </div>

      <div className="mb-16 flex flex-col space-y-4">
        {Array.from({ length: Number(Constants.JOBS_PER_PAGE) }).map((_, i) => (
          <Skeleton key={i} className="h-64 w-full" />
        ))}
      </div>
    </div>
  );
}
