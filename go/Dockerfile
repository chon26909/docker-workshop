# Build the application
FROM golang:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy go.mod and go.sum to download dependencies
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the entire project files
COPY . .

# Build the application binary
RUN go build -o main .

ENV ENVIRONMENT=production

# Expose the port the application runs on
# EXPOSE 4000

# Command to run the application
CMD ["./main"]
