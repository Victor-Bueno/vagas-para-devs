import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
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
  const previousSize = props.previousPages?.length || 0;

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
              <BreadcrumbItem
                key={page.name}
                className={previousSize > 1 ? 'hidden sm:inline-flex' : ''}
              >
                <BreadcrumbLink asChild>
                  <Link href={page.href}>{page.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator
                className={previousSize > 1 ? 'hidden sm:list-item' : ''}
              />
            </>
          ))}

        <BreadcrumbEllipsis
          className={previousSize > 1 ? 'flex sm:hidden' : 'hidden'}
        />
        <BreadcrumbSeparator
          className={previousSize > 1 ? 'list-item sm:hidden' : 'hidden'}
        />

        <BreadcrumbItem>
          <BreadcrumbPage>{props.currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
