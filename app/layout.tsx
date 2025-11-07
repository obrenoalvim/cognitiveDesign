import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Design com Vieses Cognitivos | Aprenda UX com Psicologia',
  description: 'Explore exemplos práticos de como aplicar vieses cognitivos no design de interfaces. Aprenda conceitos, veja demos e copie código HTML/CSS.',
  keywords: ['design', 'ux', 'vieses cognitivos', 'psicologia', 'ui', 'interface'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
