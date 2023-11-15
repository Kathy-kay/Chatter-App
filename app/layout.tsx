import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Chatter',
  description: 'A Blog app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="relative w-full min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
