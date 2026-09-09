import type { Metadata } from 'next';
import { Open_Sans, Cardo } from 'next/font/google';
import './globals.css';

const open = Open_Sans({ subsets: ['latin'], variable: '--font-open' });
const cardo = Cardo({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-cardo',
});

export const metadata: Metadata = {
  title: 'Data Journalism Tools',
  description:
    'A suite of no-code vizualization tools designed for journalists to create stories backed by reliable data sources.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${open.variable} ${cardo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
