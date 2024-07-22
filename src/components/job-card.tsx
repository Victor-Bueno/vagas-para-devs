import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock, MessageCircle } from 'lucide-react';

import { Constants } from '@/utils/constants';

import { CategoryIcon } from './category-icon';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export interface Job {
  id: string;
  category: 'frontend' | 'backend' | 'mobile' | 'qa' | 'data';
  title: string;
  labels: string[];
  date: Date;
  comments: number;
  description: string;
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const labelsSize = job.labels.length;
  const filteredLabels = job.labels
    .slice(0, Math.min(labelsSize, Constants.LABEL_LIMIT))
    .toSorted();

  const timeDiff = formatDistanceToNow(job.date, {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <Card className="max-h-72 w-full px-4 py-2 transition-all hover:cursor-pointer hover:border-primary hover:brightness-[0.97] dark:hover:brightness-110">
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="flex flex-row items-center gap-5">
          <CategoryIcon category={job.category} />
          <div>
            <CardTitle className="w-fit font-semibold">{job.title}</CardTitle>
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
        <div>
          <div className="flex flex-row items-center gap-2 text-sm text-muted-foreground">
            <span className="flex flex-row items-center gap-1">
              <Clock className="h-4 w-4" /> {timeDiff}
            </span>
            <div className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span className="flex flex-row items-center gap-1">
              <MessageCircle className="h-4 w-4" /> {job.comments}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-6 w-full text-sm text-muted-foreground">
          {job.description}
        </p>
      </CardContent>
    </Card>
  );
}
