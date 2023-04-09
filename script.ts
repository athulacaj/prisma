
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
 const user= await prisma.user.create({data: {name: 'Alice'}});
 console.log("🚀 ~ file: script.ts:7 ~ main ~ user:", user)

}

main().catch(e => {}).finally(async () => {
  await prisma.$disconnect()
})