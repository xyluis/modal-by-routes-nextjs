import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

import './globals.css'
import { cn } from '@/utils/cn'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--roboto',
})

export const metadata: Metadata = {
  title: 'Modal By Routes',
  description: 'Application that uses modal by routes in Next.JS',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          roboto.className,
          'flex min-h-screen w-full flex-col items-center justify-center bg-zinc-900 text-zinc-100 antialiased',
        )}
      >
        {children}
        {modal}
      </body>
    </html>
  )
}
