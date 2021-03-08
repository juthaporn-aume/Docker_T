FROM node:10.0.0-alpine
WORKDIR ./Docker_Test
COPY ./package.json ./package.json
RUN npm install
COPY . .
ENTRYPOINT [ "node", "." ]
