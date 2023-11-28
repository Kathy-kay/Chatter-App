import React from 'react'
import Login from '@/components/Login'
import {getServerSession} from "next-auth/next"
import {authOptions} from "../api/auth/[...nextauth]/route"
import {redirect} from "next/navigation"

const page = async () => {
  const session = await getServerSession(authOptions);
  if(session){
    redirect("/dashboard")
  }
  return (
    <main className=' pt-48'>
            <Login />
    </main>
  )
}

export default page
