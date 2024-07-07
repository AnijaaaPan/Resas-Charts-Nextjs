import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Favicon from '../../public/favicon.ico';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: '都道府県別 推移グラフを動的に生成出来ます',
  icons: [{ rel: 'icon', url: Favicon.src }],
  title: '都道府県別 推移グラフ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
