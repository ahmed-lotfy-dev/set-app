# Build stage
FROM oven/bun:1-slim AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
# rolldown-vite is aliased in package.json as 'vite'
RUN bun run build

# Runtime stage
FROM oven/bun:1-slim AS runtime

WORKDIR /app

# Copy the serve script and built files
COPY --from=build /app/dist ./dist
COPY --from=build /app/serve.ts ./serve.ts

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Start the server using Bun
CMD ["bun", "run", "serve.ts"]
