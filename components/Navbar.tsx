"use client"
import Link from 'next/link'
import React from 'react'
import {  useRouter } from 'next/navigation'
import {useSession, signOut} from "next-auth/react"
import Image from 'next/image'

const Navbar = () => {
const {data:session, status} = useSession()
 const router = useRouter()
// const pathname = usePathname()
//  const pagesWithoutNavbar = ['/login'];
//  const shouldHideNavbar = pagesWithoutNavbar.includes(pathname)
    
  return (
    
      <nav className='w-full h-24 bg-auth-800 z-10 px-8  sm:px-20 justify-between flex items-center fixed' >
        <Link href='/'><h1 className='text-white text-4xl max-sm:text-2xl font-bold'>CHATTER</h1></Link>
         {/* Desktop */}

         {status === "authenticated" ? (
           <div className="flex gap-4">
               <button
                onClick={() => signOut()}
                className="bg-coral-red p-2 text-white rounded-md"
                >Sign Out</button>
               {/* {session && session.user && session.user.image &&(
                <Image
                  src={}
                  alt="user image"
                  width={50}
                  height={50}
                  className='object-fit'
                />
               )}
             */}
            </div>
         ): (   
            <button
            onClick={() => router.push("/sign-in")}
            className="bg-coral-red p-2 text-white rounded-md"
            >Get Started</button>
         )}
      </nav>
  )
}

export default Navbar
