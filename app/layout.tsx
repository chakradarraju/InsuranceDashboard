import '@/styles/globals.css';
import { inter } from './ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>DashStack</title>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
