import { PrismaClient } from "@prisma/client";



const getPrisma = (): PrismaClient => {
    
  const prismaClient = new PrismaClient();

  // Close the Prisma client when the Node.js process exits
  process.on("beforeExit", () => {
    prismaClient.$disconnect();
  });

  return prismaClient;
};
const prisma = getPrisma()

export default prisma;
