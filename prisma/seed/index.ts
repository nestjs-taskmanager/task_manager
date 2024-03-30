import { PrismaClient } from '@prisma/client';
import { seedTasks } from './tasks';
import { seedAdmin } from './users';

// initialize Prisma Client
const prisma = new PrismaClient();

const seed = async () => {
  // seed admin
  const admin = await seedAdmin(prisma);

  // seed tasks
  await seedTasks(prisma, admin.id);
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
