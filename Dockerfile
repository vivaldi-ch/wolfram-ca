
# Create a standalone instance of GraphiQL populated with gatsbyjs.org's data
# ---
# TODO: Can we do this all on Alpine for a smaller image?
FROM node:10

ADD package*.json /app/
WORKDIR /app

RUN npm i

ADD . /app

EXPOSE 8000
CMD [ "npm", "run", "build" ]