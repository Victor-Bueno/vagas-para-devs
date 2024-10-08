import { formatDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { CategoryIcon } from '@/components/category-icon';
import { JobBreadcrumb } from '@/components/job-breadcrumb';
import { JobCarousel } from '@/components/job-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { api } from '@/data/api';
import { Job } from '@/data/types/job';
import { Constants } from '@/utils/constants';
import { getCategoryName } from '@/utils/styles';

async function getJob(owner: string, repo: string, id: string) {
  const response = await api(`/jobs/${owner}/${repo}/${id}`, {
    next: {
      revalidate: 60 * 60 * 5, // 5 hours
    },
  });

  const job = await response.json();

  return job;
}

async function getRelatedJobs(owner: string, repo: string) {
  const response = await api(
    `/jobs/${owner}/${repo}?per_page=${Constants.RELATED_JOBS}`,
    {
      next: {
        revalidate: 60 * 60 * 5, // 5 hours
      },
    },
  );

  const relatedJobs = await response.json();

  return relatedJobs.jobs;
}

export default async function JobPage({
  params,
}: {
  params: { data: string[] };
}) {
  const [owner, repo, id] = params.data;
  const job: Job = await getJob(owner, repo, id);
  const relatedJobs: Job[] = await getRelatedJobs(owner, repo);

  const repoFullName = job.repo.owner + '/' + job.repo.name;
  const formattedDate = formatDate(job.createdAt, 'dd/MM/yyyy', {
    locale: ptBR,
  });

  return (
    <div className="pt-8 sm:pt-16">
      <JobBreadcrumb
        currentPage={`Vaga ${job.issueNumber}`}
        previousPages={[
          {
            name: getCategoryName(job.category),
            href: `/repo/${job.category}`,
          },
          {
            name: repoFullName,
            href: `/repo/${job.category}/${repoFullName}`,
          },
        ]}
      />
      <div className="mt-1 flex flex-col gap-8 sm:mt-6 lg:grid lg:grid-cols-3">
        <div className="sm:col-span-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <CategoryIcon category={job.category} />
            <h1 className="text-2xl font-semibold sm:text-3xl">{job.title}</h1>
          </div>
          <article className="prose prose-sm mt-4 max-w-full break-words rounded-md bg-muted px-6 py-4 text-muted-foreground dark:prose-invert">
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {job.body}
            </Markdown>
          </article>
        </div>
        <aside className="sm:col-span-1">
          <Card className="sm:sticky sm:top-6">
            <CardHeader>
              <CardTitle className="text-xl">Detalhes:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col text-sm text-muted-foreground">
                <div className="flex flex-row items-center justify-between">
                  <span>Repositório:</span>
                  <div className="mx-2 h-px w-full bg-muted" />
                  <Link
                    className="text-nowrap transition-all hover:underline"
                    href={'https://github.com/' + repoFullName}
                    target="_blank"
                  >
                    @{repoFullName}
                  </Link>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span>Comentários:</span>
                  <div className="mx-2 h-px w-full bg-muted" />
                  <span>{job.comments}</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span>Postado:</span>
                  <div className="mx-2 h-px w-full bg-muted" />
                  <span>{formattedDate}</span>
                </div>
              </div>
              <Link href={job.githubUrl} target="_blank">
                <Button className="mt-4 w-full">
                  Ver no Github <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </aside>
      </div>

      <h2 className="mt-6 text-lg font-semibold">Tópicos:</h2>
      <div className="mt-4 flex flex-row flex-wrap gap-2 gap-y-2">
        {job.labels.map((label, index) => (
          <Badge key={index} variant="secondary">
            <span className="text-muted-foreground">{label.text}</span>
          </Badge>
        ))}
        {job.labels.length === 0 && (
          <span className="text-muted-foreground">Nenhum tópico associado</span>
        )}
      </div>

      <h2 className="mt-6 text-lg font-semibold">Vagas similares:</h2>
      <JobCarousel
        items={relatedJobs.filter(
          (relatedJob) => relatedJob.issueNumber !== job.issueNumber,
        )}
      />
    </div>
  );
}
