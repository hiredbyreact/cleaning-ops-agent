FROM node:20 AS builder
WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm --filter api build

FROM node:20-slim
WORKDIR /app
COPY --from=builder /app .

EXPOSE 4000
CMD ["pnpm", "--filter", "api", "start"]
RUN addgroup -S app && adduser -S app -G app
USER app
