# Multi-stage build for React/Vite application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Debug: List files to see what was copied
RUN ls -la src/components/ && echo "Checking for Navbar.tsx:" && ls -la src/components/Navbar* && echo "File exists check:" && test -f src/components/Navbar.tsx && echo "Navbar.tsx exists" || echo "Navbar.tsx does not exist"

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration (optional - using default for now)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 