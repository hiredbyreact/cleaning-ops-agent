FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN apk add --no-cache --virtual .gyp python3 make g++ && \
    npm i -g pnpm && \
    pnpm install --frozen-lockfile || true
COPY . .
# Build Next.js app (workspace aware)
RUN pnpm -w install
RUN pnpm -w build
EXPOSE 3000
CMD ["pnpm", "-w", "start"]
RUN addgroup -S app && adduser -S app -G app
USER app
