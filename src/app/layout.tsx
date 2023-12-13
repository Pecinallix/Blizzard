import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Blizzard',
  description: 'Blizzard Games'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
