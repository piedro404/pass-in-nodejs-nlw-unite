import { prisma } from "../src/lib/prisma"

async function seed() {
    await prisma.event.create({
        data: {
            id: "c8c46f0a-f796-4f10-8cfb-69e31b454f1c",
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Um evento para quem é apaxionado por programação",
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})