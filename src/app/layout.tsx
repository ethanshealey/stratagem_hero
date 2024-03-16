import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stratagem Trainer',
  description: 'A fun nextjs based game that simulates the arcade game "Stratagem Hero" from the video game "Helldivers 2"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.jpg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
