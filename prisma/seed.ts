import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  await prisma.user.create({ data: { email: 'admin@example.com', name: 'Admin' } }).catch(() => {});
  await prisma.$disconnect();
}

main();
