FROM node:lts-alpine
ARG SOME_ARG
ENV NODE_EVN=$SOME_ARG
WORKDIR /usr/src/gowater
COPY ["package.json",".env.example", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install mysql2 ../
RUN npm install -g npm@10.2.5
RUN npm install --production --silent && mv node_modules ./
COPY . .
RUN command
RUN cp .env.example .env
# RUN npm run seed ./  
EXPOSE 3000
USER node
CMD ["npm", "start"]
