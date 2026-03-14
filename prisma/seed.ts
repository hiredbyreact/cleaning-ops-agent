import { PrismaClient } from '@prisma/client';
async function main() {
  const prisma = new PrismaClient();
  try {
    await prisma.user.create({ data: { name: 'Admin' } });
  } catch {
    // ignore if exists
  } finally {
    await prisma.$disconnect();
  }
}
main();
