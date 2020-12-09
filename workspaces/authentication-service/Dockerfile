FROM node:carbon-alpine
LABEL maintainer="gobinath.rn@listertechnologies.com"
WORKDIR /home/node/app
RUN apk add --no-cache git
COPY workspaces/authentication-service /home/node/app
COPY .npmrc .npmrc
RUN npm cache clean --force
RUN npm install
RUN rm -f .npmrc
EXPOSE 3000
CMD ["npm","start"]
