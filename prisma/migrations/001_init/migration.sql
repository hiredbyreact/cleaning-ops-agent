-- Initial Prisma migration
CREATE TABLE "User" (
  "id" SERIAL PRIMARY KEY,
  "email" VARCHAR(255) UNIQUE NOT NULL,
  "name" VARCHAR(255)
);

CREATE TABLE "Site" (
  "id" SERIAL PRIMARY KEY,
  "address" VARCHAR(255) NOT NULL
);

CREATE TABLE "Job" (
  "id" SERIAL PRIMARY KEY,
  "siteId" INTEGER NOT NULL,
  "status" VARCHAR(50) NOT NULL,
  CONSTRAINT "fk_site" FOREIGN KEY ("siteId") REFERENCES "Site"("id")
);
