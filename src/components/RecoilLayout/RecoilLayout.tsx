"use client"

import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const RecoilLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <RecoilRoot>
            <body className={inter.className}>{children}<ToastContainer /></body>
        </RecoilRoot>
    )
}

export default RecoilLayout