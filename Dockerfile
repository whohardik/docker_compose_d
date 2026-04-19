FROM oven/bun:latest

WORKDIR /app

# Copy lockfile and package.json first for better caching
COPY package.json bun.lock ./

RUN bun install

# Copy the rest of the application
COPY . .

# Generate Prisma client (this doesn't need a DB connection)
RUN bunx prisma generate

# Build the application
RUN bun run build

# Expose the port (assuming 3000 based on package.json/contribute.md)
EXPOSE 3000

CMD ["./dist/index"]