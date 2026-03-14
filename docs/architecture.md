# Architecture

- Frontend: Next.js + React + TypeScript
- Backend: NestJS + TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Packaging: Docker + Docker Compose

Monorepo with two services:
- web (frontend)
- api (backend)

The database is shared via Prisma schema; a separate web service provides UI and admin workflows; API provides business logic.
