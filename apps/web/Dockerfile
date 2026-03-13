FROM node:20 AS builder
WORKDIR /app

# Install PNPM and dependencies
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install

# Copy all sources
COPY . .

# Build web app
RUN pnpm --filter web build

FROM node:20-slim
WORKDIR /app
COPY --from=builder /app .

EXPOSE 3000
CMD ["pnpm", "--filter", "web", "start"]
RUN addgroup -S app && adduser -S app -G app
USER app
