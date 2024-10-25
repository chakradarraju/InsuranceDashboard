import '@/styles/globals.css';
import { Provider } from "@/components/ui/provider"
import { inter } from './ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='h-full' suppressHydrationWarning>
      <head>
        <title>DashStack</title>
      </head>
      <body className={`${inter.className} antialiased min-h-screen h-full`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
