import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface JobBreadcrumbProps {
  currentPage: string;
  previousPages?: { name: string; href: string }[];
}

export function JobBreadcrumb(props: JobBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={'/'}>Início</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {props.previousPages &&
          props.previousPages.map((page) => (
            <>
              <BreadcrumbItem key={page.name}>
                <BreadcrumbLink asChild>
                  <Link href={page.href}>{page.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{props.currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
