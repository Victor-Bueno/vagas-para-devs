import { RepoCategoryCard } from './repo-category-card';

export function RepoCategoryListing() {
  return (
    <div className="grid space-y-5">
      <RepoCategoryCard
        category="frontend"
        title="Frontend"
        description="Vagas de emprego focadas em desenvolvedores front-end envolvendo tecnologias como React, Vue, Angular, HTML, CSS e JavaScript."
        href="/repo/frontend"
      />

      <RepoCategoryCard
        category="backend"
        title="Backend"
        description="Vagas de emprego focadas em desenvolvedores back-end envolvendo tecnologias como Node.js, Ruby, Python, PHP, Java e .NET."
        href="/repo/backend"
      />

      <RepoCategoryCard
        category="mobile"
        title="Mobile"
        description="Vagas de emprego focadas em desenvolvedores mobile envolvendo tecnologias como React Native, Flutter, Swift, Kotlin e Java."
        href="/repo/mobile"
      />

      <RepoCategoryCard
        category="qa"
        title="QA"
        description="Vagas de emprego focadas em desenvolvedores de Quality Assurance (QA) envolvendo tecnologias como Selenium, Cypress, Jest e JUnit."
        href="/repo/qa"
      />

      <RepoCategoryCard
        category="data"
        title="Data Science"
        description="Vagas de emprego focadas em desenvolvedores de dados envolvendo tecnologias como SQL, NoSQL, Big Data, Data Science e Machine Learning."
        href="/repo/data"
      />
    </div>
  );
}
