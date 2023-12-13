import './globals.css'

import type { Metadata } from 'next'
import RecoilLayout from "@/components/RecoilLayout/RecoilLayout"

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
      <RecoilLayout>{children}</RecoilLayout>
    </html>
  )
}
