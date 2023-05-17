FROM node:alpine 
WORKDIR /app
COPY package*.json . 
# RUN npm ci 
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \ 
        else npm ci; \
        fi
COPY . ./
ENV PORT 5000
EXPOSE $PORT
CMD ["node", "index.js"]