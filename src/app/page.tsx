import { Filters } from '@/components/filters';
import { Header } from '@/components/header';
import { Job } from '@/components/job-card';
import { JobListing } from '@/components/job-listing';
import { Separator } from '@/components/ui/separator';

const mockJobs: Job[] = [
  {
    id: '1',
    category: 'frontend',
    title: 'Front-end Developer na Empresa X',
    labels: ['NextJS', 'React', 'JavaScript', 'CLT', 'Híbrido', 'Pleno'],
    comments: 7,
    date: new Date('2024-07-16'),
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: '2',
    category: 'backend',
    title: 'Back-end Developer na Empresa X',
    labels: ['NodeJS', 'JavaScript', 'PJ', 'Senior'],
    comments: 0,
    date: new Date('2024-07-16'),
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: '3',
    category: 'mobile',
    title: 'Mobile Developer na Empresa X',
    labels: ['Android', 'Java', 'Kotlin', 'CLT', 'Pleno'],
    comments: 0,
    date: new Date('2024-07-17'),
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: '4',
    category: 'qa',
    title: 'QA na Empresa X',
    labels: ['Testes Automatizados', 'Cypress', 'Selenium', 'CLT'],
    comments: 7,
    date: new Date('2024-07-12'),
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: '5',
    category: 'data',
    title: 'Data Engineer na Empresa X',
    labels: ['SQL', 'Python', 'ETL', 'CLT', 'Senior', 'Big Data', 'Hadoop'],
    comments: 7,
    date: new Date('2024-06-16'),
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <div className="my-24 flex w-full justify-center">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-4xl font-semibold">
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

      <Filters />

      <JobListing jobs={mockJobs} />
    </>
  );
}
