import '../globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

import Header from '@/components/Header'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyContacts',
  description: 'Contact management app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
