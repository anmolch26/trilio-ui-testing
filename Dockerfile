FROM public.ecr.aws/docker/library/node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build
COPY . .
# Debug: List the contents of src/components to see what files are copied
RUN ls -la src/components/
# Debug: Check if the Navbar file exists
RUN ls -la src/components/Navbar*
# Debug: Check the current directory structure
RUN find src -name "*.tsx" | head -10
RUN npm run build

# Production image
FROM public.ecr.aws/docker/library/nginx:latest AS runner

COPY --from=builder /app/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
