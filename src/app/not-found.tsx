import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="pt-8 sm:pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold sm:text-4xl">
            Página não encontrada
          </h1>
          <p className="mt-4 text-muted-foreground">
            A página que você está procurando não existe. Que tal voltar para a{' '}
            <Link href="/" className="text-primary hover:underline">
              página inicial
            </Link>
            ?
          </p>
        </div>
      </div>
    </div>
  );
}
