FROM node:18-alpine
WORKDIR /workspace
COPY package.json pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm install --frozen-lockfile || pnpm install
COPY . .
RUN pnpm build
CMD ["node", "dist/main.js"]
RUN addgroup -S app && adduser -S app -G app
USER app
