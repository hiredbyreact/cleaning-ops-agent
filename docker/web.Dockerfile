# Web (Next.js) container
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-workspace.yaml ./
COPY apps/web/package.json apps/web/package.json
COPY apps/web/tsconfig.json apps/web/tsconfig.json
COPY apps/web/next.config.ts apps/web/next.config.ts
COPY apps/web/ .
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm --filter web build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.pnpm /app/.pnpm
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/apps/web /app/apps/web
EXPOSE 3000
CMD ["pnpm", "--filter", "web", "start"]
RUN addgroup -S app && adduser -S app -G app
USER app
