import prisma from "@/prisma/index"
import { NextResponse } from "next/server"


export async function GET( req: Request, {params}: {params: {email: string}}) {
    try {
       const email = params.email
       const post = await prisma.user.findUnique({
        where: {email},
        include:{
            posts: {orderBy: { createdAt: "desc" }}
        }
       })
       return NextResponse.json({message: post}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}