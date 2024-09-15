FROM node:slim
WORKDIR /app
COPY  . /app
RUN npm install
EXPOSE 6001
CMD node index.js