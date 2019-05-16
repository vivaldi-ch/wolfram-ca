
# Create a standalone instance of GraphiQL populated with gatsbyjs.org's data
# ---
# TODO: Can we do this all on Alpine for a smaller image?
FROM node:10

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8000
CMD [ "npm", "run", "deploy" ]