FROM cypress/base:12

COPY . .
RUN yarn install
RUN yarn build:and:test
