'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { RecoilRoot } from 'recoil'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'L33tc0de Tracker',
  description: 'Track your Leetcode problems solved and solution notes in one place.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body className={inter.className}>{children}<ToastContainer /></body>
      </RecoilRoot>
    </html>
  )
}
