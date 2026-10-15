import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kodovoz Labs',
  description: 'Software agency for web, mobile and cloud products.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
