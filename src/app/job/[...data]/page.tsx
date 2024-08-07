import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { CategoryIcon } from '@/components/category-icon';
import { JobCarousel } from '@/components/job-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { api } from '@/data/api';
import { Job } from '@/data/types/job';

async function getJob(owner: string, repo: string, id: string) {
  const response = await api(`/jobs/${owner}/${repo}/${id}`, {
    next: {
      revalidate: 60 * 60 * 5, // 5 hours
    },
  });

  const job = await response.json();

  return job;
}

export default async function JobPage({
  params,
}: {
  params: { data: string[] };
}) {
  const [owner, repo, id] = params.data;
  const job: Job = await getJob(owner, repo, id);

  return (
    <>
      <div className="grid grid-cols-3 gap-8 pt-16">
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <CategoryIcon category={job.category} />
            <h1 className="text-3xl font-semibold">{job.title}</h1>
          </div>
          <article className="prose dark:prose-invert mt-4 rounded-md bg-muted px-6 py-4 text-muted-foreground">
            <Markdown remarkPlugins={[remarkGfm]}>{job.body}</Markdown>
          </article>
        </div>
        <aside className="col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-xl">Detalhes:</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="flex flex-col">
                <span>Repositório: {job.repo.owner + '/' + job.repo.name}</span>
                <span>Comentários: {job.comments}</span>
                <span>Postado há: 2 dias atrás</span>
              </CardDescription>
              <Link href={job.githubUrl} target="_blank">
                <Button className="mt-4 w-full">
                  Candidatar-se <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </aside>
      </div>

      <h2 className="mt-6 text-lg font-semibold">Tópicos:</h2>
      <div className="mt-4 flex flex-row space-x-2">
        {job.labels.map((label, index) => (
          <Badge key={index} variant="secondary">
            <span className="text-muted-foreground">{label.text}</span>
          </Badge>
        ))}
      </div>

      <h2 className="mt-6 text-lg font-semibold">Vagas similares:</h2>
      <JobCarousel />
    </>
  );
}
