"use client"
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {signIn } from "next-auth/react"

const Login = () => {
  return (
    <div >
        <h1 className=' text-4xl font-bold text-center text-auth-800 mb-20'>Sign in</h1>
      <div className='flex flex-col justify-center items-center gap-4 '>
        <button 
        onClick={() => signIn("github")}
        className='border border-auth-800 rounded-full gap-5 p-4 text-lg flex items-center
        hover:bg-auth-800 hover:text-white '>
            <span>
                <FaGithub size={40}/> 
            </span>
            Sign In with Github
        </button>
        <button 
        onClick={() => signIn("google")}
        className='border border-auth-800 rounded-full gap-5 p-4 text-lg flex items-center
        hover:bg-auth-800 hover:text-white '>
            <span>
                <FcGoogle  size={40}/> 
            </span>
            Sign In with Google
        </button>
      </div>
    </div>
  )
}

export default Login
