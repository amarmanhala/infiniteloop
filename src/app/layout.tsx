import './globals.css'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-6`}>
        <Header />
        {children}</body>
    </html>
  )
}
