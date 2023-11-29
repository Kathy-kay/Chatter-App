import { NextResponse } from 'next/server'
import prisma from "@/prisma/index"


export const POST = async (req: Request) => {

    const {title, content, imageUrl, category, publicId} = await req.json()
    const authorEmail = "john@gmail.com"

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
            catName: category,
            authorEmail
        },
    });
    console.log("post created")
    return NextResponse.json({message: newPost}, {status: 200});
  } catch (error) {
    return NextResponse.json({message: "could not create post"}, {status: 501})
  }
}


