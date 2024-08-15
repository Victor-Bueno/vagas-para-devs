import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import { CategoryIcon } from '@/components/category-icon';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Category } from '@/data/types/job';
import { cn } from '@/lib/utils';
import { Constants } from '@/utils/constants';
import { getCategoryColor } from '@/utils/styles';

interface JobCardProps {
  category: Category;
  title: string;
  labels: string[];
  date: Date;
  comments: number;
  description: string;
  link: string;
}

export function JobCard(props: JobCardProps) {
  const labelsSize = props.labels.length;
  const filteredLabels = props.labels
    .slice(0, Math.min(labelsSize, Constants.LABEL_LIMIT))
    .toSorted();

  const timeDiff = formatDistanceToNow(props.date, {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <Link href={props.link}>
      <Card className="w-full py-1 transition-all hover:cursor-pointer hover:border-primary sm:px-4 sm:py-2">
        <CardHeader className="flex flex-row flex-wrap items-start justify-between pb-3 sm:flex-nowrap sm:pb-6">
          <div
            className={cn(
              'flex flex-col gap-2 sm:flex-row sm:gap-5',
              labelsSize > 0 ? 'items-start' : 'items-center',
            )}
          >
            <CategoryIcon
              category={props.category}
              className="hidden sm:block"
            />
            <CardStats
              timeDiff={timeDiff}
              comments={props.comments}
              className="block sm:hidden"
            />
            <div>
              <div className="flex flex-row gap-2">
                <div
                  className={cn(
                    'block w-1 rounded-sm sm:hidden',
                    getCategoryColor(props.category),
                  )}
                />
                <CardTitle className="line-clamp-2 w-fit break-words text-lg font-semibold leading-6 sm:text-2xl sm:leading-7">
                  {props.title}
                </CardTitle>
              </div>
              <div className="mt-2 flex flex-row space-x-2">
                {filteredLabels.map((label, index) => (
                  <Badge
                    key={label}
                    variant="secondary"
                    className={
                      index + 1 > Math.floor(Constants.LABEL_LIMIT / 2)
                        ? 'hidden sm:block'
                        : ''
                    }
                  >
                    <span className="text-muted-foreground">{label}</span>
                  </Badge>
                ))}
                <PlusBadge labelsSize={labelsSize} />
              </div>
            </div>
          </div>
          <CardStats
            timeDiff={timeDiff}
            comments={props.comments}
            className="hidden sm:block"
          />
        </CardHeader>
        <CardContent>
          <p className="line-clamp-6 w-full text-sm text-muted-foreground">
            {props.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

function PlusBadge({ labelsSize }: { labelsSize: number }) {
  const areLabelsHidden = labelsSize > Constants.LABEL_LIMIT;
  const areLabelsHiddenSmall =
    labelsSize > Math.floor(Constants.LABEL_LIMIT / 2);

  return (
    <Badge
      variant="secondary"
      className={cn(
        areLabelsHidden ? '' : 'sm:hidden',
        areLabelsHiddenSmall ? '' : 'hidden',
      )}
    >
      <span className="text-muted-foreground">+</span>
    </Badge>
  );
}

function CardStats(props: {
  timeDiff: string;
  comments: number;
  className?: string;
}) {
  return (
    <div className={cn('pl-0 sm:pl-2', props.className)}>
      <div className="flex flex-row items-center gap-2 text-xs text-muted-foreground sm:text-sm">
        <span className="flex flex-row items-center gap-1 whitespace-nowrap">
          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
          {props.timeDiff}
        </span>
        <div className="block h-1 w-1 rounded-full bg-muted-foreground" />
        <span className="flex flex-row items-center gap-1">
          <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" /> {props.comments}
        </span>
      </div>
    </div>
  );
}
