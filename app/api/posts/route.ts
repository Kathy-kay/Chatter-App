import { NextResponse } from 'next/server'
import prisma from "@/prisma/index"
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'


export const POST = async (req: Request) => {

  const session = getServerSession(authOptions)

  if(!session){
    return NextResponse.json({message: "Not authenticated"}, {status: 401})
  }

    const {title, content, imageUrl, selectedCategory, publicId} = await req.json()
    const authorEmail = "adgunkafy27@gmail.com"

    if (!title || !content){
        return NextResponse.json({message: "tItle and content are required"}, {status: 500})
    }
  try {
    
    const newPost = await prisma.post.create({
        data: {
            title,
            content,
            imageUrl,
            publicId,
            catName: selectedCategory,
            authorEmail
        },
    });
    console.log("post created")
    return NextResponse.json({message: newPost}, {status: 200});
  } catch (error) {
    return NextResponse.json({message: "could not create post"}, {status: 501} )
  }
}

export async function GET(){
  try{
    const posts = await prisma.post.findMany({
      include: {author: {select: {name: true}}},
      orderBy: {
        createdAt: "desc"
      }
    })
    return NextResponse.json({message: posts}, {status: 200})
  }
  catch(error){
    console.log(error)
     return NextResponse.json({message: "some error occured"}, {status: 500})
  }
}

