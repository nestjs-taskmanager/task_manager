import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

const seed = async () => {
  // create two dummy tasks
  const tasks = await prisma.task.createMany({
    data: [
      {
        title: 'Setup Prisma setting',
        body: 'set up prisma setting for the project',
      },
      {
        title: 'Connect to database',
        body: 'connect to database using prisma client',
      },
    ],
  });

  console.log('Seed data created successfully', { tasks });
};

// execute the seed function
seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
