import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/app/components/Navbar";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'R&W blog',
  description: 'Created by Ilya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900'>
      <Navbar/>
      <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
      {children}
      </main>
      </body>
    </html>
  )
}
