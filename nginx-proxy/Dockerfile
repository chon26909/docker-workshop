FROM nginx:alpine

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
