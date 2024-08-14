import { Brush, Bug, Database, Server, Smartphone } from 'lucide-react';

import { Category } from '@/data/types/job';
import { cn } from '@/lib/utils';
import { getCategoryColor } from '@/utils/styles';

interface CategoryIconProps {
  category: Category;
}

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
