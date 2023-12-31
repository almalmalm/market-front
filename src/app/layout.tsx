import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/styles.scss';
import { Header } from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Market marketplace',
  description: 'You can buy many different items from the market.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
