import { Brush, Bug, Database, Server, Smartphone } from 'lucide-react';

import { cn } from '@/lib/utils';

export type JobCategory = 'frontend' | 'backend' | 'mobile' | 'qa' | 'data';

interface CategoryIconProps {
  category: JobCategory;
}

const categoryColors = {
  frontend: 'bg-cyan-600',
  backend: 'bg-orange-600',
  mobile: 'bg-purple-600',
  qa: 'bg-pink-600',
  data: 'bg-lime-600',
};

export function CategoryIcon({ category }: CategoryIconProps) {
  return (
    <div className={cn('rounded-md p-3', categoryColors[category])}>
      {category === 'frontend' && (
        <Brush className="h-10 w-10 text-primary-foreground" />
      )}

      {category === 'backend' && (
        <Server className="h-10 w-10 text-primary-foreground" />
      )}

      {category === 'mobile' && (
        <Smartphone className="h-10 w-10 text-primary-foreground" />
      )}

      {category === 'qa' && (
        <Bug className="h-10 w-10 text-primary-foreground" />
      )}

      {category === 'data' && (
        <Database className="h-10 w-10 text-primary-foreground" />
      )}
    </div>
  );
}
