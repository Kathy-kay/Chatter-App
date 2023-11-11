"use client"
import React from 'react'
import { ISignUp } from '@/constant/types'
import { signupResolver, signupDefaultValues } from '@/constant/validation'
import {useForm} from "react-hook-form"

const SignUp:React.FC = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<ISignUp>({
    defaultValues: signupDefaultValues,
   resolver: signupResolver
  })


  return (
    <div className="w-full h-full ">
      <h2 className='text-2xl font-bold mb-4 text-center text-auth-800'>Create an Account</h2>
      <form className="w-5/6 mx-auto text-black">
          <div className="mb-5">
            <label className='mb-2 '>Full Name</label>
            <input type="text"
                placeholder='Enter your fullname'
                {...register("fullName")}
                className="w-full border px-4 py-2 h-10 rounded-md"
              />   
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor=""className=' mb-2'>User Name</label>
            <input type="text"
              placeholder='Enter your username'
              {...register("username")}
              className="w-full border px-4 py-2 h-10 rounded-md"
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="" className='mb-2'>Email</label>
            <input type="text"
              placeholder='example@gmail.com'
              {...register("email")}
              className="w-full border px-4 py-2 h-10 rounded-md"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="" className='mb-2'>Password</label>
            <input type="password" 
              placeholder='Enter your passwrd'
              {...register("password")}
              className="w-full border px-4 py-2 h-10 rounded-md"/>
              {errors.password && <p>{errors.password.message}</p>}
          </div>
        
      </form>
    </div>
  )
}

export default SignUp
