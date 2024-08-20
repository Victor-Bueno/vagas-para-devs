'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from './ui/button';

interface PaginationProps {
  totalPages: number;
}

export function Pagination({ totalPages }: PaginationProps) {
  const { push } = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const lastPage = totalPages === 1 ? currentPage : totalPages;

  return (
    <div className="mt-8 flex flex-row items-center justify-between lg:justify-center">
      <Button
        className="text-primary"
        variant={'outline'}
        size={'icon'}
        disabled={currentPage === 1}
        onClick={() => push(createPageURL(currentPage - 1))}
      >
        <ChevronLeft />
      </Button>
      <span className="px-8 py-2 text-sm">{`Página ${currentPage} de ${lastPage}`}</span>
      <Button
        className="text-primary"
        variant={'outline'}
        size={'icon'}
        disabled={currentPage === lastPage}
        onClick={() => push(createPageURL(currentPage + 1))}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
