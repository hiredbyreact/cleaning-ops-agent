# API container (NestJS)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-workspace.yaml ./
COPY apps/api/package.json apps/api/package.json
COPY apps/api/tsconfig.json apps/api/tsconfig.json
COPY apps/api/nest-cli.json apps/api/nest-cli.json
COPY apps/api/src/ apps/api/src/
COPY prisma ./prisma
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm --filter api build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/apps/api/dist /app/dist
COPY --from=builder /app/apps/api/package.json /app/api-package.json
ENV NODE_ENV=production
EXPOSE 3001
CMD ["node", "dist/main.js"]
RUN addgroup -S app && adduser -S app -G app
USER app
