"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {

// const router = useRouter()
// //  const pagesWithoutNavbar = ['/login'];
// //  const shouldHideNavbar = pagesWithoutNavbar.includes(router.pathname)
    
  return (
    <nav className='w-full h-24 bg-auth-800 z-10 px-8  sm:px-20 justify-between flex items-center fixed' >
        <Link href='/'><h1 className='text-white text-4xl max-sm:text-2xl font-bold'>CHATTER</h1></Link>
         {/* Desktop */}
        <div className=" text-white ">
           <Link 
           href={"/sign-in"}
           className="bg-coral-red p-2 text-white rounded-md"
           >Get Started</Link>
        </div>
    </nav>
  )
}

export default Navbar
