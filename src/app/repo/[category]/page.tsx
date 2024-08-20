import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { JobBreadcrumb } from '@/components/job-breadcrumb';
import { RepoCategoryCard } from '@/components/repo-category-listing/repo-category-card';
import { Category } from '@/data/types/job';
import { REPOSITORIES } from '@/utils/constants';
import { getCategoryName } from '@/utils/styles';

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const categoryName = getCategoryName(params.category as Category);

  return {
    title: 'Vagas ' + categoryName,
    description:
      'Encontre vagas de emprego para Desenvolvedores ' + categoryName,
  };
}

export default function RepoListPage({
  params,
}: {
  params: { category: string };
}) {
  const repositories = REPOSITORIES.filter(
    (repo) => repo.category === params.category,
  );

  if (repositories.length === 0) {
    redirect('/404');
  } else if (repositories.length === 1) {
    redirect(
      `/repo/${params.category}/${repositories[0].owner}/${repositories[0].name}`,
    );
  }

  const typedCategory = params.category as Category;

  return (
    <div className="pt-8 sm:pt-16">
      <JobBreadcrumb currentPage={getCategoryName(typedCategory)} />
      <h1 className="pt-2 text-2xl font-semibold sm:text-4xl">
        Repositórios {getCategoryName(typedCategory)}
      </h1>
      <span className="text-sm text-muted-foreground">
        Escolha um dos repositórios a seguir para conferir suas vagas
        disponíveis
      </span>

      <div className="grid space-y-5 pt-4">
        {repositories.map((repo) => {
          const title = `${repo.owner}/${repo.name}`;
          return (
            <RepoCategoryCard
              key={title}
              category={typedCategory}
              title={title}
              description={repo.desc}
              href={`/repo/${params.category}/${repo.owner}/${repo.name}`}
            />
          );
        })}
      </div>
    </div>
  );
}
