import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-center py-8 sm:flex-row sm:flex-nowrap sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} VagasParaDevs
            </p>
          </div>
          <div>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Sobre o projeto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
