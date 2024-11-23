FROM node:22-alpine

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn run build --configuration=production

EXPOSE 4000

CMD ["npx", "http-server", "dist/frontend/browser", "-p", "4000", "-c-1", "--proxy", "http://backend:3000"]
