FROM node:18-alpine
WORKDIR /workspace
COPY package.json pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm install --frozen-lockfile || pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
RUN addgroup -S app && adduser -S app -G app
USER app
