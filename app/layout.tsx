import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

require('dotenv').config();

const font = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevin Lee Portfolio',
  description: 'Learn more about me and my projects!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
