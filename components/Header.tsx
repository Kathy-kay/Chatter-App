import React from 'react'
import hero from  "@/public/hero.png"
import Image from "next/image"
import Link from 'next/link'
const Header = () => {
  return (
    <div className="relative w-full min-h-screen"> 
        <Image src={hero} 
        alt="hero page"
        className='object-cover object-center min-h-screen w-full ' 
        />
        <div className="absolute w-full h-full top-0 bg-black opacity-50 "></div>
        <div className="absolute top-[40%] left-20 max-sm:left-8 max-sm:right-8  max-w-[1000px]">
          <h1 className='text-5xl text-white leading-tight font-bold max-sm:text-3xl'>Welcome to Chatter: A Haven for  
          Text-Based Content
          </h1>
          <p className='text-[16px] sm:text-xl text-biege my-7 sm:mt-5 '>Unleash the Power of words, Connect with 
          Like-minded Readers <br/> and Writers</p>
          <Link href={"/sign-in"}
          className="bg-coral-red py-2 px-4 text-white rounded-md"
          >Get Started</Link>
        </div>
    </div>
  ) 
}

export default Header
