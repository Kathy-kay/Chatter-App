"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {  useRouter } from 'next/navigation'
import {useSession, signOut} from "next-auth/react"
import Image from 'next/image'
import { MdCreate } from "react-icons/md"
import { GoSignOut } from "react-icons/go";


const Navbar = () => {
const {data:session, status} = useSession()
const [isOpen, setIsOpen] = useState<Boolean>(false)
const router = useRouter()

const toggle = () =>{
  setIsOpen(!isOpen)
}


// const pathname = usePathname()
//  const pagesWithoutNavbar = ['/login'];
//  const shouldHideNavbar = pagesWithoutNavbar.includes(pathname)
    
  return (
      <header className="fixed bg-auth-800 left-0 right-0 z-10">
          <nav className='flex items-center justify-between py-6 mx-auto px-6 md:px-20 ' >
            <Link href='/'>
              <h1 className='text-white text-4xl max-sm:text-2xl font-bold font-montserrat'>
                CHATTER</h1>
            </Link>
            {/* Desktop */}

            {status === "authenticated" ? (
              <div className="flex gap-8">
                  <Link href={"/create-post"}
                    className="flex gap-2 items-center text-xl text-white border max-md:hidden rounded-md px-2 hover:bg-coral-red hover:border-coral-red">
                      <span>
                      <MdCreate />
                    </span> Write</Link>
                  {isOpen && (
                    <div className="absolute flex flex-col text-left bg-auth-800 px-10 right-16 top-20 py-6 rounded-md font-poppin gap-6 ">
                    <h3 className='text-white text-lg '>{session?.user?.name}</h3>
                    <Link href={"/create-post"} 
                    onClick={() => setIsOpen(false)} 
                    className="text-white text-lg flex items-center gap-2">
                      
                      Create-Post</Link>
                    <Link href={"/dashboard"} 
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg leading-tight">Dashboard</Link>
                    <button
                      onClick={() => signOut()}
                      className="text-coral-red flex gap-2 items-center"
                      >
                        <GoSignOut size={20} />
                        Sign Out
                    </button>
                  </div>
                  )}
                    {session && session.user && session.user.image &&( 
                    <Image
                      src={session.user?.image}
                      alt="user image"
                      width={40}
                      height={40}
                      className='rounded-full cursor-pointer'
                      onClick={toggle}
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
