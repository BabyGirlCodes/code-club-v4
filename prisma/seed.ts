import { PrismaClient } from '../lib/generated/prisma'


const prisma = new PrismaClient()

async function main() {
  // Seed Programs
  await prisma.program.createMany({
    data: [
      {
        title: "Scratch",
        description: " Create animations,apps,and interactive stories by adding code,costumes, and sounds.",
        imageUrl: "/scratch.png",
        backgroundColor: "#E6F4F1",
      },
      {
        title: "Python",
        description: " Make digital art, games, and more while exploring one of the world's most popular programming languages.",
        imageUrl: "/python.png",
        backgroundColor: "#FFF5E1",
      },
      {
        title: "Web Design",
        description: "Build websites and apps by learning HTML, CSS and JavaScript.",
        imageUrl: "/web.png",
        backgroundColor: "#EFEFFF",
      }
    ]
  })

  // Seed Events
  await prisma.event.createMany({
    data: [
      {
        title: "Open House",
        date: new Date("2025-03-15"),
        description: "Tour our campus, meet faculty, and learn about our programs for prospective families."
      },
      {
        title: "Science Fair",
        date: new Date("2025-04-05"),
        description: "Students showcase their innovative science projects to the community."
      },
      {
        title: "Spring Concert",
        date: new Date("2025-04-22"),
        description: "Join us for an evening of music performed by our talented student musicians."
      }
    ]
  })
}

main()
  .then(() => {
    console.log("✅ Seeding completed.")
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
