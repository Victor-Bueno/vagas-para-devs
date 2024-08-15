import { Brush, Bug, Database, Server, Smartphone } from 'lucide-react';

import { Category } from '@/data/types/job';
import { cn } from '@/lib/utils';
import { getCategoryColor, getCategoryName } from '@/utils/styles';

interface CategoryIconProps {
  category: Category;
  className?: string;
}

export function CategoryIcon({ category, className }: CategoryIconProps) {
  return (
    <div
      className={cn(
        'flex flex-row items-center gap-2 rounded-md p-2 sm:p-3',
        getCategoryColor(category),
        className,
      )}
    >
      {category === 'frontend' && (
        <Brush
          strokeWidth={1.5}
          className="h-6 w-6 text-primary-foreground sm:h-10 sm:w-10"
        />
      )}

      {category === 'backend' && (
        <Server
          strokeWidth={1.5}
          className="h-6 w-6 text-primary-foreground sm:h-10 sm:w-10"
        />
      )}

      {category === 'mobile' && (
        <Smartphone
          strokeWidth={1.5}
          className="h-6 w-6 text-primary-foreground sm:h-10 sm:w-10"
        />
      )}

      {category === 'qa' && (
        <Bug
          strokeWidth={1.5}
          className="h-6 w-6 text-primary-foreground sm:h-10 sm:w-10"
        />
      )}

      {category === 'data' && (
        <Database
          strokeWidth={1.5}
          className="h-6 w-6 text-primary-foreground sm:h-10 sm:w-10"
        />
      )}

      <span className="text-lg text-background sm:sr-only">
        {getCategoryName(category)}
      </span>
    </div>
  );
}
