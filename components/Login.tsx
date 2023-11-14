"use client"
import { ILogin } from '@/constant/types'
import { loginDefaultValues, loginResolver } from '@/constant/validation'
import React from 'react'
import { useForm } from 'react-hook-form'
import {FcGoogle} from "react-icons/fc"

const Login:React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ILogin>({
        defaultValues: loginDefaultValues,
        resolver: loginResolver
    })
  return (
    <div className="w-full h-full">
        <h2 className='text-2xl font-bold mb-7 text-center text-auth-800'>Welcome back!</h2>
        <form className="w-5/6 mx-auto">
            <div className="mb-5">
                <label htmlFor="" className=''>User Name</label>
                <input type="text"
                    placeholder='Enter your username'
                    {...register("username")}
                    className="w-full border px-4 py-2 mt-3 h-10 rounded-md"
                />
                {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className="mb-5">
                <label>Password</label>
                <input type="password" 
                     placeholder='Enter your passwrd'
                    {...register("password")}
                    className="w-full border px-4 py-2 mt-5 h-10 rounded-md"/>
                {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button className="w-full bg-auth-800 text-white py-2 rounded-md border-white" >Log In</button>
          <button className='w-full mt-5 py-2 rounded-md border-auth-800 border flex items-center justify-center gap-3'>
             <span className=''><FcGoogle  size={20}/></span>Sign in with Google
          </button>
        </form>
    </div>
  )
}

export default Login
