import { ExternalLink } from 'lucide-react';

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

export default function JobPage() {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 pt-16">
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-4">
            <CategoryIcon category="frontend" />
            <h1 className="text-3xl font-semibold">Frontend Developer</h1>
          </div>
          <p className="mt-4 text-muted-foreground">
            {Array.from({ length: 5 }).map(
              () =>
                `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            )}
          </p>
        </div>
        <aside className="col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-xl">Detalhes:</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="flex flex-col">
                <span>Repositório: FrontendBr</span>
                <span>Comentários: 7</span>
                <span>Postado há: 2 dias atrás</span>
              </CardDescription>
              <Button className="mt-4 w-full">
                Candidatar-se <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>

      <h2 className="mt-6 text-lg font-semibold">Tópicos:</h2>
      <div className="mt-4 flex flex-row space-x-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Badge key={index} variant="secondary">
            <span className="text-muted-foreground">TEST</span>
          </Badge>
        ))}
      </div>

      <h2 className="mt-6 text-lg font-semibold">Vagas similares:</h2>
      <JobCarousel />
    </>
  );
}
