import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({ data: { email: 'admin@example.com', password: 'changeme' } }).catch(() => {});
}
main().catch(console.error).finally(() => prisma.$disconnect());
