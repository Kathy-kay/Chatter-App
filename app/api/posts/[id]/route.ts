import { NextResponse } from "next/server"
import prisma from "@/prisma/index"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"


export async function GET( req: Request, {params}: {params: {id: string}}) {
    try {
        const id = params.id
        const post = await prisma.post.findUnique({where: {id}})
   
    return NextResponse.json({message: post}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}


export async function PUT(req: Request, {params}: {params: {id: string}}) {

    const session = getServerSession(authOptions);

    if(!session){
        return NextResponse.json({message: "Not authenticated"}, {status: 401})
    }

    const {title, content, imageUrl, selectedCategory, publicId} = await req.json();
    try {
        const id = params.id;
        const post = await prisma.post.update({
            where: {id},
            data:{
                title,
                content,
                imageUrl,
                catName: selectedCategory,
                publicId
            }
        })
        return NextResponse.json({message: post}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "error updating data"}, {status: 500})
    }
}

export async function DELETE(req: Request,  {params} : {params: {id: string}}) {
    try {           
        const session = getServerSession(authOptions);

    if(!session){
        return NextResponse.json({message: "Not authenticated"}, {status: 401})
    }

        const id = params.id
        const post = await prisma.post.delete({
            where: {id}
        })
        return NextResponse.json({message: "post successfully deleted"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}