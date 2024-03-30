import { PrismaClient } from '@prisma/client';

const { EMAIL = '', EMAIL_PASSWORD = '' } = process.env;

export const seedAdmin = async (prisma: PrismaClient) => {
  // create two dummy tasks
  const admin = await prisma.user.upsert({
    where: { email: EMAIL },
    update: {},
    create: {
      name: 'Admin',
      email: EMAIL,
      password: EMAIL_PASSWORD,
    },
  });

  console.log('Seed admin successfully', { admin });
  return admin;
};
