import { SquareCode } from 'lucide-react';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

import { GithubButton } from './github-button';
import { ThemeButton } from './theme-button';

export function Header() {
  return (
    <>
      <header className="flex w-full flex-row items-center justify-between py-5">
        <Link
          href={'/'}
          className="flex flex-row items-center gap-2 font-medium"
        >
          <SquareCode className="h-6 w-6 text-primary" />
          VagasParaDevs
        </Link>
        <div className="flex flex-row items-center gap-4">
          <ThemeButton />
          <GithubButton />
        </div>
      </header>
      <Separator />
    </>
  );
}
