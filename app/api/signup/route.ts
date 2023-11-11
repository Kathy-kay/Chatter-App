import prisma from "@/prisma";
import connectToDb from "@/utils"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import { signupSchema} from "@/constant/validation";


export const POST = async(req: Request) =>{
    try {
        await connectToDb();
        const {fullName, username, email, password} = await req.json();

        await signupSchema.validate({fullName,username, email, password})

       
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    {email: email},
                    {username: username}
                ]
            }
        })  
        if(existingUser){
            let errorMessage = "User already exist";
            if(existingUser.email === email){
                errorMessage += " with this email"
            }
            else if(existingUser.username === username){
                errorMessage += " with this username"
            }
            return NextResponse.json({message: errorMessage }, {status: 409})
        }    
        //hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt)

        // create a new user 
        const newUser = await prisma.user.create({
            data: {
                fullName,
                username,
                email,
                password: hashedPassword
            }
        })
        return NextResponse.json({newUser}, {status: 201})
    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 500})
    }finally{
        await prisma.$disconnect();
    }
}