import { loginSchema } from "@/constant/validation";
import prisma from "@/prisma";
import connectToDb from "@/utils"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import  jwt from "jsonwebtoken"

export const POST = async(req: Request) =>{
    try {
        await connectToDb();
        const {username, password} = await req.json();
        
        //validate input data using the loginschema
        await loginSchema.validate({username, password})

        const user = await prisma.user.findFirst({
            where:{
                username
            }
        })
        if(!user){
            return NextResponse.json({
                message: "User not found"},
                {status: 404}
            )
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return NextResponse.json({message: "Invalid password" }, {status: 401})
        }


        //create token data
        const tokenData = {
            id : user.id,
            username: user.username,
            email: user.email
        }
        //generate jwt token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

       // Set token as an HTTP-only cookie
        const response = NextResponse.json(
        { message: "User successfully logged in" },
        { status: 200 }
      );
      response.cookies.set("token", token, {
        httpOnly: true,
      
      });
      return response;
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
    finally{
        await prisma.$disconnect()
    }
}