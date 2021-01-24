FROM node:12-alpine

EXPOSE 3000

# HEALTHCHECK --interval=10s --timeout=3s --start-period=2s \
#     CMD node ./lib/healthcheck.js

WORKDIR /opt/app

COPY package*.json ./

RUN npm install && npm cache clean --force --loglevel=error

COPY . ./

CMD [ "node", "index.js"]
