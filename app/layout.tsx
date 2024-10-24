import '@/styles/globals.css';
import { inter } from './ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='h-full'>
      <head>
        <title>DashStack</title>
      </head>
      <body className={`${inter.className} antialiased min-h-screen h-full`}>{children}</body>
    </html>
  );
}
