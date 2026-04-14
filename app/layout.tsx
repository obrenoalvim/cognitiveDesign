import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://cognitive-design.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Design com Vieses Cognitivos | UX & Psicologia na Prática',
    template: '%s | Cognitive Design',
  },
  description:
    'Aprenda a aplicar vieses cognitivos no design de interfaces. Explore exemplos interativos de Efeito Chamariz, Ancoragem, Prova Social e outros princípios da psicologia cognitiva aplicados ao UX/UI.',
  keywords: [
    'vieses cognitivos design',
    'psicologia UX',
    'design cognitivo',
    'UX psicologia',
    'efeito chamariz UX',
    'ancoragem design',
    'prova social interface',
    'bias cognitivo UI',
    'design persuasivo',
    'princípios de design UX',
    'psicologia do consumidor',
    'interface intuitiva',
  ],
  authors: [{ name: 'Breno Alvim', url: 'https://github.com/obrenoalvim' }],
  creator: 'Breno Alvim',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Design com Vieses Cognitivos | UX & Psicologia na Prática',
    description:
      'Explore exemplos práticos de vieses cognitivos no design de interfaces. Veja demos interativos e copie código HTML/CSS.',
    url: siteUrl,
    siteName: 'Cognitive Design',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design com Vieses Cognitivos | UX & Psicologia',
    description:
      'Como psicologia cognitiva se aplica ao design de interfaces. Demos interativos, explicações e código copiável.',
    creator: '@obrenoalvim',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cognitive Design',
  url: siteUrl,
  description:
    'Aprenda a aplicar vieses cognitivos no design de interfaces. Exemplos interativos de princípios da psicologia aplicados ao UX/UI.',
  inLanguage: 'pt-BR',
  author: {
    '@type': 'Person',
    name: 'Breno Alvim',
    url: 'https://github.com/obrenoalvim',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
