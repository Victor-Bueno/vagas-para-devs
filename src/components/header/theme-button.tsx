'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '../ui/button';

export function ThemeButton() {
  const { setTheme, theme } = useTheme();

  function handleSwitchThemeClick() {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="p-0"
      onClick={handleSwitchThemeClick}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alterar tema</span>
    </Button>
  );
}
