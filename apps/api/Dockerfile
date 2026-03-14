FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm install --frozen-lockfile || pnpm install
COPY . .
RUN npm run build || true
EXPOSE 4000
CMD ["node","dist/main.js"]
RUN addgroup -S app && adduser -S app -G app
USER app
