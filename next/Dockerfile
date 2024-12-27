# Stage 1: Build the Next.js static files
FROM node:alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build and export Next.js app
RUN npm run build 

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Copy Nginx configuration
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy exported static files to Nginx's HTML directory
COPY --from=builder /app/out /usr/share/nginx/html

ARG ENVIRONMENT
COPY .env.${ENVIRONMENT} .env

# Expose ports
EXPOSE 8081

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
