import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main(){
  const site = await prisma.site.create({ data: { address: '123 Main St' } });
  await prisma.user.create({ data: { email: 'demo@example.com', name: 'Demo User' } });
  await prisma.job.create({ data: { siteId: site.id, status: 'OPEN' } });
}
main().catch(e => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
