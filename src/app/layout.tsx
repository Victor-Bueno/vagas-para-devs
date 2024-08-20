import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: 'VagasParaDevs | %s',
    default: 'VagasParaDevs | Encontre vagas',
  },
  description: 'Encontre vagas de emprego para desenvolvedores de software',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'flex min-h-screen justify-center bg-background font-sans antialiased',
          poppins.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen w-full max-w-5xl flex-col justify-between px-4">
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
