FROM  node:12.18.4

ENV NUXT_HOST=0.0.0.0

WORKDIR /app

COPY package.json tsconfig.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "dev"]
EXPOSE 3000