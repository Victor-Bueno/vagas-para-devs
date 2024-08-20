import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingJobPage() {
  return (
    <div className="pt-8 sm:pt-16">
      <Skeleton className="h-8 w-1/2" />
      <div className="mt-1 flex flex-col gap-8 sm:mt-6 lg:grid lg:grid-cols-3">
        <div className="sm:col-span-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Skeleton className="h-12 w-full flex-shrink-0 sm:h-16 sm:w-16" />
            <Skeleton className="h-20 w-full" />
          </div>
          <Skeleton className="mt-4 h-96 w-full" />
        </div>
        <aside className="sm:col-span-1">
          <Skeleton className="h-48 w-full sm:sticky sm:top-6" />
        </aside>
      </div>

      <h2 className="mt-6 text-lg font-semibold">Tópicos:</h2>
      <div className="mt-4 flex flex-row flex-wrap gap-2 gap-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-20 rounded-full" />
        ))}
      </div>

      <h2 className="mt-6 text-lg font-semibold">Vagas similares:</h2>
      <div className="mt-4 flex flex-row gap-2">
        <Skeleton className="h-44 w-full sm:w-1/2 lg:w-1/3" />
        <Skeleton className="hidden h-44 sm:block sm:w-1/2 lg:w-1/3" />
        <Skeleton className="hidden h-44 lg:block lg:w-1/3" />
      </div>
    </div>
  );
}
