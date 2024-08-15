import { RepoCategoryListing } from '@/components/repo-category-listing';
import { Separator } from '@/components/ui/separator';

export default async function Home() {
  return (
    <>
      <div className="mb-16 mt-24 flex w-full justify-center">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-2xl font-semibold sm:text-4xl">
            Encontre Vagas de <br /> Emprego para Devs
          </h1>
          <Separator className="my-5 h-1 max-w-48 bg-primary" />
          <p className="text-muted-foreground">
            Coleção de vagas de emprego para desenvolvedores de software
            reunidas de diferentes repositórios abastecidos pela comunidade
            brasileira.
          </p>
        </div>
      </div>

      <RepoCategoryListing />
    </>
  );
}
