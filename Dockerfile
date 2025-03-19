# Use nginx as the base image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy all frontend files
COPY index.html register.html script.js styles.css ./
COPY images/ ./images/
COPY LICENSE README.md ./

# Expose port 80
EXPOSE 80

# Nginx starts automatically, no need for explicit CMD