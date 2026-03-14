FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["pnpm", "start"]
RUN addgroup -S app && adduser -S app -G app
USER app
