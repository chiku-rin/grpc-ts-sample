FROM  node:12.18.4

WORKDIR /app

COPY package.json tsconfig.json yarn.lock ./
RUN yarn install
COPY src src
CMD ["yarn", "dev"]
EXPOSE 50051