# Pin specific version
# Use alpine for reduced image size
FROM node:19.9-alpine3.17 AS base

# Set NODE ENV
ENV NODE_ ENV production

# Specify working directory other than
WORKDIR /usr/src/app

# Copu only files required to instal
# dependencies (better layer caching)
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy remaining source code AFTER installing dependencies.
# Again, copy only the necessarv files
COPY --chown=node:node ./src/ ./src/

# Use non-root user
# Use --chown on COPY commands to set file permissions
USER node

# Indicate expected port
EXPOSE 3000

CMD [ "yarn", "start" ]