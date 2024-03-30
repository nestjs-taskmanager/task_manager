import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
const { EMAIL = '', EMAIL_PASSWORD = '' } = process.env;

const roundsOfHashing = 10;

export const seedAdmin = async (prisma: PrismaClient) => {
  // create two dummy tasks
  const password = await hash(EMAIL_PASSWORD, roundsOfHashing);
  const admin = await prisma.user.upsert({
    where: { email: EMAIL },
    update: { password },
    create: {
      name: 'Admin',
      email: EMAIL,
      password,
    },
  });

  console.log('Seed admin successfully', { admin });
  return admin;
};
