# Use a specific Node version
FROM node:19.9-alpine3.17 AS base

# Set NODE_ENV to production
ENV NODE_ENV=production

# Specify working directory
WORKDIR /usr/src/app

# Copy only files required to install dependencies
COPY package*.json ./

# Install dependencies
RUN yarn install --production --frozen-lockfile

# Build TypeScript
FROM base AS build
COPY . .
RUN yarn build

# Use non-root user
USER node

# Indicate expected port
EXPOSE 3000

# Copy build output
FROM base AS release
COPY --from=build --chown=node:node /usr/src/app/dist ./dist

# Start the application
CMD [ "yarn", "start" ]
