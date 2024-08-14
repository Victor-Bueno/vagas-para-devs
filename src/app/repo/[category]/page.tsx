import { redirect } from 'next/navigation';

import { RepoCategoryCard } from '@/components/repo-category-listing/repo-category-card';
import { Category } from '@/data/types/job';
import { REPOSITORIES } from '@/utils/constants';

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
    redirect(`/repo/${params.category}/${repositories[0].owner}`);
  }

  return (
    <div className="pt-16">
      <h1 className="text-4xl font-semibold">Repositórios {params.category}</h1>
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
              category={params.category as Category}
              title={title}
              description={repo.desc}
              href={`/repo/${params.category}/${repo.owner}`}
            />
          );
        })}
      </div>
    </div>
  );
}
