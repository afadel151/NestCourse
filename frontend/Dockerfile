FROM node:20-alpine

WORKDIR /app

COPY . .

RUN curl -fsSL https://bun.sh/install | bash \
    && ln -s /root/.bun/bin/bun /usr/local/bin/bun \
    && bun install --frozen-lockfile \
    && bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]
