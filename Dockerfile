# ─── Stage 1: Build Nuxt Frontend ───────────────────────────────
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend

COPY frontend/package*.json nuxt.config.ts ./
RUN npm ci

COPY frontend/ .
RUN npm run build            # populates .output/

# ─── Stage 2: Build Nest Backend ───────────────────────────────

# ─── Stage 3: Assemble Runtime Image ───────────────────────────
FROM nginx:stable-alpine AS runtime

# 1) Nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 2) Nuxt static assets
COPY --from=frontend-builder /app/frontend/.output/public /usr/share/nginx/html

# 3) Nitro server files
COPY --from=frontend-builder /app/frontend/.output/server /usr/src/nuxt-server
COPY --from=frontend-builder /app/frontend/.output/server/node_modules /usr/src/nuxt-server/node_modules
COPY --from=frontend-builder /app/frontend/.output/server/package.json /usr/src/nuxt-server

# 4) Nest backend
COPY --from=backend-builder /app/backend/dist /usr/src/nest/dist
COPY --from=backend-builder /app/backend/node_modules /usr/src/nest/node_modules
COPY --from=backend-builder /app/backend/package.json /usr/src/nest

# expose port 80
EXPOSE 80

# startup script
COPY nginx/start.sh /usr/bin/start.sh
RUN chmod +x /usr/bin/start.sh

CMD ["/usr/bin/start.sh"]
