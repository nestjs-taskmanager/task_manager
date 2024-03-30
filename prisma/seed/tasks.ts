import { PrismaClient, User } from '@prisma/client';

export const seedTasks = async (prisma: PrismaClient, userId?: User['id']) => {
  // create two dummy tasks
  const tasks = await prisma.task.createMany({
    data: [
      {
        title: 'Setup Prisma setting',
        body: 'set up prisma setting for the project',
        userId,
      },
      {
        title: 'Connect to database',
        body: 'connect to database using prisma client',
        userId,
      },
    ],
    skipDuplicates: true,
  });

  console.log('Seed data created successfully', { tasks });
};
