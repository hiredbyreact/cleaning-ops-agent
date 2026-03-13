FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package.json
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm -w build || true

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3001
CMD ["pnpm", "--filter", "api", "start"]
RUN addgroup -S app && adduser -S app -G app
USER app
