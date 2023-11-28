import CreatePostsForm from '@/components/CreatePostsForm'
import React from 'react'
import {getServerSession} from "next-auth/next"
import {authOptions} from "../api/auth/[...nextauth]/route"
import {redirect} from "next/navigation"

const page = async () => {
  const session = await getServerSession(authOptions)
  // console.log(session)
  if(!session){
    redirect("/sign-in")
  }
  return (
    <CreatePostsForm />
  )
}

export default page
