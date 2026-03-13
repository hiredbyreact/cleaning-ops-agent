FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm install --frozen-lockfile || true
COPY . .
RUN pnpm -w install
RUN pnpm -w build
EXPOSE 3001
CMD ["node", "dist/main.js"]
RUN addgroup -S app && adduser -S app -G app
USER app
