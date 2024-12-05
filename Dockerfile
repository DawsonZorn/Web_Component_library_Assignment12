# Use Node.js as the base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /zorn_dawson_ui_garden

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to serve the production build
RUN npm install -g serve

# Set environment variable for the port
ENV PORT=8083

# Expose the necessary port
EXPOSE 8083

# Command to serve the app
CMD ["serve", "-s", "build", "-l", "8083"]