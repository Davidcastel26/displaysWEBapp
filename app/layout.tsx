import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'animate.css';
import './globals.css'
import { ProvidersTanksQuery } from './providers';
import { ThemeProvider } from "@/components/system/theme-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Carreta',
  description: 'Admin La Carreta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersTanksQuery>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </ProvidersTanksQuery>
      </body>
    </html>
  )
}
