FROM node:18-alpine
WORKDIR /app
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml || true
RUN npm i -g pnpm && pnpm install
COPY . .
RUN pnpm build
EXPOSE 3001
CMD ["pnpm","start"]
RUN addgroup -S app && adduser -S app -G app
USER app
