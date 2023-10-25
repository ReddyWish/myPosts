import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/app/components/Navbar";
import MyProfilePic from "@/app/components/MyProfilePic";
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
      <body className='bg-black'>
      <Navbar/>
      <MyProfilePic/>
      {children}
      </body>
    </html>
  )
}
