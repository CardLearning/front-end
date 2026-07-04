import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

import '../styles/global.scss'

export const metadata: Metadata = {
  title: 'LearningCard',
  description: 'Frontend for the Card Learning application',
}

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-dm-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>{children}</body>
    </html>
  )
}
