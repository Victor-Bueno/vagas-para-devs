'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Constants } from '@/utils/constants';

export function SortJobsSelect() {
  const { push } = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSortState = searchParams.get('sort') || Constants.DEFAULT_SORT;

  const createSortURL = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    params.set('page', '1');
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Select
      defaultValue={currentSortState}
      onValueChange={(value) => push(createSortURL(value))}
    >
      <SelectTrigger className="w-full sm:w-48">
        <SelectValue placeholder="Ordenar" />
      </SelectTrigger>
      <SelectContent
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => e.preventDefault();
        }}
      >
        <SelectGroup>
          <SelectLabel>Ordenar por</SelectLabel>
          <SelectItem value="created_desc">Mais recente</SelectItem>
          <SelectItem value="created_asc">Mais antigo</SelectItem>
          <SelectItem value="comments_desc">Mais comentários</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
