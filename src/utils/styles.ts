import * as TailwindColors from 'tailwindcss/colors';

import { Category } from '@/data/types/job';

export const getCategoryColor = (category: Category) => {
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

export const getTailwindCategoryColor = (
  theme: string | undefined,
  category: Category,
) => {
  if (theme === 'dark') {
    switch (category) {
      case 'frontend':
        return TailwindColors.cyan[500];
      case 'backend':
        return TailwindColors.orange[500];
      case 'mobile':
        return TailwindColors.purple[500];
      case 'qa':
        return TailwindColors.pink[500];
      case 'data':
        return TailwindColors.lime[500];
    }
  } else {
    switch (category) {
      case 'frontend':
        return TailwindColors.cyan[600];
      case 'backend':
        return TailwindColors.orange[600];
      case 'mobile':
        return TailwindColors.purple[600];
      case 'qa':
        return TailwindColors.pink[600];
      case 'data':
        return TailwindColors.lime[600];
    }
  }
};
