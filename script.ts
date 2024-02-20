import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function main(){
    const user=await prisma.user.create({data:{name:"sanjukumar"}})
    const users=await prisma.user.findMany();
    console.log(users)
}

main()
.catch(err=>console.log(err.message))
.finally(async()=>{
    await prisma.$disconnect()
})