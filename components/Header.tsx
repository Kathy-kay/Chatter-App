"use client"
import React from 'react'
import hero from  "@/public/hero.png"
import Image from "next/image"

import { useRouter } from 'next/navigation'
const Header = () => {
  const router = useRouter()
  return (
    <div className="relative w-full min-h-screen"> 
        <Image src={hero} 
        alt="hero page"
        priority
        className='object-cover object-center min-h-screen w-full ' 
        />
        <div className="absolute w-full h-full top-0 bg-black opacity-50 "></div>
        <div className="absolute top-[40%] left-5 md:left-20 max-sm:right-8  max-w-[1000px]">
          <h1 className='md:text-5xl text-xl text-white md:leading-tight leading-normal font-montserrat font-bold max-sm:text-3xl'>Welcome to Chatter: A Haven for  
          Text-Based Content
          </h1>
          <p className='text-[16px] sm:text-xl text-biege my-7 sm:mt-5 font-poppin'>Unleash the Power of words, Connect with 
          Like-minded Readers <br/> and Writers</p>
          <button 
          onClick={() => router.push("/sign-in")}
          className="bg-coral-red py-2 px-4 text-white rounded-md"
          >Get Started</button>
        </div>
    </div>
  ) 
}

export default Header
