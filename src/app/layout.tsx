import AppWrapper from './AppWrapper'
import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stratagem Trainer',
  description: 'A fun nextjs based game that simulates the arcade game "Stratagem Hero" from the video game "Helldivers 2"',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>    
  )
}