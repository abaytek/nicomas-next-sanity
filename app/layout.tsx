import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ subsets:['latin'], weight: ['100','200','300','400','500','600','700','800','900']  })

export const metadata: Metadata = {
  title: 'Moga Charity Association',
  description: 'Moga charity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
