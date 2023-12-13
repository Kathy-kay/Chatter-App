import prisma from "@/prisma/index"
import { NextResponse } from "next/server"


export async function GET(req: Request, {params}: {params: {catName: string}}) {
    try {
        const catName = params.catName
        const posts = await prisma.category.findUnique({
            where: {catName},
            include: {
                posts: {include: {author: true}, orderBy: {createdAt: "desc"}}
            }
        })
        return NextResponse.json({message: posts}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "could not fetch post"}, {status: 500})
    }
}