import Image from 'next/image';

import { JobBreadcrumb } from '@/components/job-breadcrumb';

export default function About() {
  return (
    <div className="flex flex-row gap-16 pt-16">
      <main className="space-y-2">
        <JobBreadcrumb currentPage={'Sobre'} />
        <h1 className="text-4xl font-semibold">Sobre o projeto</h1>
        <p className="text-sm text-muted-foreground">
          Coleção de vagas de emprego para desenvolvedores de software reunidas
          de diferentes repositórios abastecidos pela comunidade brasileira.
        </p>

        <h2 className="flex flex-row items-center gap-2 pt-6 text-xl font-semibold">
          <span className="inline-block h-2 w-2 bg-primary" />O que é o
          VagasParaDevs?
        </h2>
        <p className="text-sm text-muted-foreground">
          É um site que realiza uma coleção de vagas de emprego para
          desenvolvedores de software reunidas de diferentes repositórios
          abastecidos pela comunidade brasileira. O objetivo é facilitar a busca
          por vagas de emprego que estão espalhadas em diferentes repositórios
          do GitHub.
        </p>

        <h2 className="flex flex-row items-center gap-2 pt-6 text-xl font-semibold">
          <span className="inline-block h-2 w-2 bg-primary" />
          Como funciona?
        </h2>
        <p className="text-sm text-muted-foreground">
          Reunimos vagas de emprego de diferentes repositórios do GitHub e
          disponibilizamos de forma organizada e categorizada para facilitar a
          busca por vagas de emprego.
        </p>

        <h2 className="flex flex-row items-center gap-2 pt-6 text-xl font-semibold">
          <span className="inline-block h-2 w-2 bg-primary" />
          Como criar vagas?
        </h2>
        <p className="text-sm text-muted-foreground">
          Para criar uma vaga de emprego, basta acessar o repositório do GitHub
          que deseja adicionar a vaga e seguir as instruções do arquivo
          README.md.
        </p>

        <h2 className="flex flex-row items-center gap-2 pt-6 text-xl font-semibold">
          <span className="inline-block h-2 w-2 bg-primary" />
          Tecnologias e como contribuir?
        </h2>
        <p className="text-sm text-muted-foreground">
          O projeto é open source e utiliza as tecnologias Next.js, Tailwind CSS
          e TypeScript. Para contribuir, basta acessar o repositório do projeto
          no GitHub e seguir as instruções.
        </p>

        <h2 className="flex flex-row items-center gap-2 pt-6 text-xl font-semibold">
          <span className="inline-block h-2 w-2 bg-primary" />
          Sobre o Autor
        </h2>
        <p className="text-sm text-muted-foreground">
          O projeto foi criado por{' '}
          <a
            href="https://www.linkedin.com/in/victor-bueno7/"
            className="text-primary hover:underline"
          >
            Victor Bueno
          </a>{' '}
          com o objetivo de aplicar novos conhecimentos e, de alguma forma,
          tentar ajudar a comunidade brasileira.
        </p>
      </main>
      <Image
        src="/about_image.jpg"
        className="object-cover"
        quality={100}
        height={700}
        width={200}
        alt="imagem ilustrativa com o céu saturado e um rastro de fumaça"
      />
    </div>
  );
}
