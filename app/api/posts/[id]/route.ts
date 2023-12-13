import { NextResponse } from "next/server"
import prisma from "@/prisma/index"


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
    const {title, content, imageUrl, category, publicId} = await req.json();
    try {
        const id = params.id;
        const post = await prisma.post.update({
            where: {id},
            data:{
                title,
                content,
                imageUrl,
                catName: category,
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
        const id = params.id
        const post = await prisma.post.delete({
            where: {id}
        })
        return NextResponse.json({message: "post successfully deleted"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}