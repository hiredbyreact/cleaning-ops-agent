-- Prisma init migration
CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";

CREATE TABLE "User" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" VARCHAR(255),
  "email" VARCHAR(255) UNIQUE,
  "createdAt" TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

CREATE TABLE Lead (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "status" VARCHAR(50)
);

CREATE TABLE Site (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "address" VARCHAR(512)
);

CREATE TABLE Job (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "leadId" UUID,
  "siteId" UUID,
  "status" VARCHAR(50) DEFAULT 'pending',
  "createdAt" TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

CREATE TABLE Invoice (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "jobId" UUID,
  "amount" DOUBLE PRECISION,
  "status" VARCHAR(50)
);
