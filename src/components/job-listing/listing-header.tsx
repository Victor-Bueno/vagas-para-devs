import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { JobBreadcrumb } from '../job-breadcrumb';

interface ListingHeaderProps {
  currentPage: string;
  previousPages: { name: string; href: string }[];
}

export function ListingHeader(props: ListingHeaderProps) {
  return (
    <div className="mb-6 mt-12 flex flex-row items-center justify-between">
      <JobBreadcrumb
        currentPage={props.currentPage}
        previousPages={props.previousPages}
      />

      <Select defaultValue="relevance">
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Ordenar" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Ordenar por</SelectLabel>
            <SelectItem value="relevance">Relevância</SelectItem>
            <SelectItem value="recent">Mais recente</SelectItem>
            <SelectItem value="oldest">Mais antigo</SelectItem>
            <SelectItem value="comments">Mais comentários</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
