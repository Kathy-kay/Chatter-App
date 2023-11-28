import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import {NextAuthProvider} from '@/components/Providers'
import {Poppins, Montserrat} from "next/font/google"

export const metadata: Metadata = {
  title: 'Chatter',
  description: 'A Blog app',
}
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400"
  
 })
 const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "700"
  
 })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${poppins.variable} ${montserrat.variable}`} >
    
        <NextAuthProvider>
          <div className="relative w-full min-h-screen">
            <Navbar />
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
