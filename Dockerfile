FROM node:latest
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# optional use nginx:alpine here too
FROM nginx:mainline
COPY --from=0 /app/build /usr/share/nginx/html