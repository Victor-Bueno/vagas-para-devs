'use client';

import { Github, Moon, SquareCode, Sun } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { CalloutCircle } from './callout-circle';

export function Header() {
  function handleGithubClick() {
    window.open('https://github.com/Victor-Bueno/vagas-para-devs', '_blank');
  }

  return (
    <>
      <header className="flex w-full flex-row items-center justify-between py-5">
        <Link
          href={'/'}
          className="flex flex-row items-center gap-2 font-medium"
        >
          <SquareCode className="text-primary h-6 w-6" />
          VagasParaDevs
        </Link>
        <div className="flex flex-row items-center gap-4">
          <Button variant="outline" size="icon" className="p-0">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Alterar tema</span>
          </Button>
          <Button
            variant="outline"
            className="relative flex flex-row gap-2 text-sm"
            size="sm"
            onClick={handleGithubClick}
          >
            <Github className="h-4 w-4" />
            Github
            <span className="absolute right-0.5 top-0.5 -translate-y-1/2 translate-x-1/2 transform">
              <CalloutCircle />
            </span>
          </Button>
        </div>
      </header>
      <Separator />
    </>
  );
}
