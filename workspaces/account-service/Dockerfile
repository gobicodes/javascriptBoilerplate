FROM node:carbon-alpine
LABEL maintainer="gobinath.rn@listertechnologies.com"
WORKDIR /home/node/app
RUN apk add --no-cache git
COPY workspaces/account-service /home/node/app
RUN mkdir -p /home/node/app/csp_bin_release/
COPY workspaces/commons/* /home/node/app/csp_bin_release/
RUN npm cache clean --force
RUN npm install
RUN rm -f .npmrc
EXPOSE 3001
CMD ["npm","start"]
