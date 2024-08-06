import { Brush, Bug, Database, Server, Smartphone } from 'lucide-react';

import { Category } from '@/data/types/job';
import { cn } from '@/lib/utils';

interface CategoryIconProps {
  category: Category;
}

const getCategoryColor = (category: Category) => {
  switch (category) {
    case 'frontend':
      return 'bg-cyan-600 dark:bg-cyan-500';
    case 'backend':
      return 'bg-orange-600 dark:bg-orange-500';
    case 'mobile':
      return 'bg-purple-600 dark:bg-purple-500';
    case 'qa':
      return 'bg-pink-600 dark:bg-pink-500';
    case 'data':
      return 'bg-lime-600 dark:bg-lime-500';
  }
};

export function CategoryIcon({ category }: CategoryIconProps) {
  return (
    <div className={cn('rounded-md p-3', getCategoryColor(category))}>
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
