FROM node:20-alpine

WORKDIR /app

# Install curl for health checks
RUN apk add --no-cache curl

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy TypeScript config and source
COPY tsconfig.json ./
COPY src ./src

# Install dev dependencies for build, then build, then remove dev deps
RUN npm install && npm run build && npm prune --production

# Expose port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
