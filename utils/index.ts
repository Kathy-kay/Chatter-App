import prisma from "@/prisma"

const connectToDb = async () => {
    try {
        await prisma.$connect()
    } catch (error: any) {
        throw  new Error(error.message)
    }
    
}
export default connectToDb