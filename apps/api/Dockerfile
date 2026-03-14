FROM node:18-alpine
WORKDIR /app
COPY package.json package.json
COPY apps/api/package.json apps/api/package.json
RUN npm install -g pnpm && pnpm install --frozen-lockfile --dir apps/api
COPY . .
WORKDIR /app/apps/api
CMD ["node", "dist/main.js"]
RUN addgroup -S app && adduser -S app -G app
USER app
