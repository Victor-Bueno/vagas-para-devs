import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import { CategoryIcon } from '@/components/category-icon';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Category } from '@/data/types/job';
import { Constants } from '@/utils/constants';

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
      <Card className="max-h-72 w-full px-4 py-2 transition-all hover:cursor-pointer hover:border-primary">
        <CardHeader className="flex flex-row items-start justify-between">
          <div className="flex flex-row items-start gap-5">
            <CategoryIcon category={props.category} />
            <div>
              <CardTitle className="line-clamp-2 w-fit break-words font-semibold leading-7">
                {props.title}
              </CardTitle>
              <div className="mt-2 flex flex-row space-x-2">
                {filteredLabels.map((label) => (
                  <Badge key={label} variant="secondary">
                    <span className="text-muted-foreground">{label}</span>
                  </Badge>
                ))}
                {labelsSize > Constants.LABEL_LIMIT && (
                  <Badge variant="secondary">
                    <span className="text-muted-foreground">+</span>
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="pl-2">
            <div className="flex flex-row items-center gap-2 text-sm text-muted-foreground">
              <span className="flex flex-row items-center gap-1 whitespace-nowrap">
                <Clock className="h-4 w-4" />
                {timeDiff}
              </span>
              <div className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span className="flex flex-row items-center gap-1">
                <MessageCircle className="h-4 w-4" /> {props.comments}
              </span>
            </div>
          </div>
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
