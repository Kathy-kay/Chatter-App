import { NextResponse } from 'next/server'

import prisma from "@/prisma/index"

export async function GET()  {
    try {
        const categories = await prisma.category.findMany()
        return NextResponse.json(categories)
    } catch (error: any) {
       console.log(error.message)
       return NextResponse.json("something went wrong")
    }

}

