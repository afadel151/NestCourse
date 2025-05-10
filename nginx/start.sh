#!/usr/bin/env sh

# 1) Start Nest backend
node /usr/src/nest/dist/main.js &

# 2) Start Nuxt Nitro server
node /usr/src/nuxt-server/index.mjs &

# 3) Launch Nginx
nginx -g "daemon off;"
