import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

interface CalloutCircleProps extends ComponentPropsWithoutRef<'div'> {}

export function CalloutCircle({ className }: CalloutCircleProps) {
  return (
    <div className={cn(className, 'flex items-center gap-1')}>
      <div className="relative size-3.5">
        <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
        <div className="absolute inset-0 animate-pulse rounded-full bg-primary/30" />
        <div className="absolute inset-[3px] rounded-full bg-primary" />
      </div>
    </div>
  );
}
