import { Brush, Bug, Database, Server, Smartphone } from 'lucide-react';

import { cn } from '@/lib/utils';

export type JobCategory = 'frontend' | 'backend' | 'mobile' | 'qa' | 'data';

interface CategoryIconProps {
  category: JobCategory;
}

const categoryColors = {
  frontend: 'bg-cyan-600 dark:bg-cyan-500',
  backend: 'bg-orange-600 dark:bg-orange-500',
  mobile: 'bg-purple-600 dark:bg-purple-500',
  qa: 'bg-pink-600 dark:bg-pink-500',
  data: 'bg-lime-600 dark:bg-lime-500',
};

export function CategoryIcon({ category }: CategoryIconProps) {
  return (
    <div className={cn('rounded-md p-3', categoryColors[category])}>
      {category === 'frontend' && (
        <Brush
          strokeWidth={1.5}
          className="h-10 w-10 text-primary-foreground"
        />
      )}

      {category === 'backend' && (
        <Server
          strokeWidth={1.5}
          className="h-10 w-10 text-primary-foreground"
        />
      )}

      {category === 'mobile' && (
        <Smartphone
          strokeWidth={1.5}
          className="h-10 w-10 text-primary-foreground"
        />
      )}

      {category === 'qa' && (
        <Bug strokeWidth={1.5} className="h-10 w-10 text-primary-foreground" />
      )}

      {category === 'data' && (
        <Database
          strokeWidth={1.5}
          className="h-10 w-10 text-primary-foreground"
        />
      )}
    </div>
  );
}
