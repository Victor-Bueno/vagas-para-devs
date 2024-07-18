import { Header } from '@/components/header';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <Header />

      <div className="mt-24 flex w-full justify-center">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-4xl font-semibold">
            Encontre Vagas de <br /> Emprego para Devs
          </h1>
          <Separator className="bg-primary my-5 h-1 max-w-48" />
          <p className="text-muted-foreground">
            Coleção de vagas de emprego para desenvolvedores de software
            reunidas de diferentes repositórios abastecidos pela comunidade
            brasileira.
          </p>
        </div>
      </div>
    </>
  );
}
