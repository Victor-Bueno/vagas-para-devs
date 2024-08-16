import Link from 'next/link';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Job } from '@/data/types/job';
import { cn } from '@/lib/utils';
import { getCategoryColor } from '@/utils/styles';

interface JobCarouselProps {
  items: Job[];
}

export function JobCarousel({ items }: JobCarouselProps) {
  return (
    <Carousel className="mt-4 sm:static sm:flex sm:flex-col sm:items-end xl:relative">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem
            key={item.issueNumber}
            className="basis-10/12 lg:basis-1/2 xl:basis-1/3"
          >
            <Link
              href={`/job/${item.repo.owner}/${item.repo.name}/${item.issueNumber}`}
            >
              <Card className="transition-all hover:cursor-pointer hover:border-primary">
                <CardHeader className="flex flex-row gap-2">
                  <div
                    className={cn(
                      'block w-1 shrink-0 grow-0 rounded-sm',
                      getCategoryColor(item.category),
                    )}
                  />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-8 flex flex-row gap-5">
        <CarouselPrevious className="hidden sm:static sm:inline-flex xl:absolute" />
        <CarouselNext className="hidden sm:static sm:inline-flex xl:absolute" />
      </div>
    </Carousel>
  );
}
