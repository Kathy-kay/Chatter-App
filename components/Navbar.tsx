"use client"
import Link from 'next/link'
import React from 'react'
import {  useRouter } from 'next/navigation'
import {useSession, signOut} from "next-auth/react"
import Image from 'next/image'
import { MdCreate } from "react-icons/md"


const Navbar = () => {
const {data:session, status} = useSession()
 const router = useRouter()
// const pathname = usePathname()
//  const pagesWithoutNavbar = ['/login'];
//  const shouldHideNavbar = pagesWithoutNavbar.includes(pathname)
    
  return (
      <header className="fixed bg-auth-800 left-0 right-0 z-10">
          <nav className='flex items-center justify-between py-5 mx-auto container  max-md:px-6 ' >
            <Link href='/'>
              <h1 className='text-white text-4xl max-sm:text-2xl font-bold font-montserrat'>
                CHATTER</h1>
            </Link>
            {/* Desktop */}

            {status === "authenticated" ? (
              <div className="flex gap-5">
                  <Link href={"/create-post"}
                    className="flex gap-2 items-center text-xl text-white border max-md:hidden rounded-md px-2 hover:bg-coral-red hover:border-coral-red">
                      <span>
                      <MdCreate />
                    </span> Write</Link>
                  <button
                    onClick={() => signOut()}
                    className="bg-coral-red p-2 text-white rounded-md hidden"
                    >Sign Out</button>
                    {session && session.user && session.user.image &&( 
                    <Image
                      src={session.user?.image}
                      alt="user image"
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                    )}
                    
                </div>
            ): (   
                <button
                onClick={() => router.push("/sign-in")}
                className="bg-coral-red p-2 text-white rounded-md"
                >Get Started</button>
            )}
          </nav>
      </header>
  )
}

export default Navbar
