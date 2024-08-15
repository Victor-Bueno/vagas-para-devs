'use client';

import { Github } from 'lucide-react';

import { CalloutCircle } from '../callout-circle';
import { Button } from '../ui/button';

export function GithubButton() {
  function handleGithubClick() {
    window.open('https://github.com/Victor-Bueno/vagas-para-devs', '_blank');
  }

  return (
    <Button
      variant="outline"
      className="relative flex flex-row gap-2 text-sm"
      size="sm"
      onClick={handleGithubClick}
    >
      <Github className="h-4 w-4" />
      <span className="sr-only sm:not-sr-only">Github</span>
      <span className="absolute right-0.5 top-0.5 -translate-y-1/2 translate-x-1/2 transform">
        <CalloutCircle />
      </span>
    </Button>
  );
}
