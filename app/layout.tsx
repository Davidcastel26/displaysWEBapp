import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import 'animate.css';
import './globals.css'
import { ProvidersTanksQuery } from './providers';
import { ThemeProvider } from "@/components/system/theme-provider";
import { cn } from '@/lib/utils';

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

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
      <body 
        className={
          cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )
        }
      >
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
