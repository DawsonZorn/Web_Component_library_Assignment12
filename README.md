# UI Component Library

This project is a UI Component Library built using React and Storybook.

## Getting Started

1. Clone the repository.
2. Build the Docker image:
   ```bash
   sudo docker build -t lastname_firstname_coding_assignment12 .
   sudo docker run -p 8083:8083 --name lastname_firstname_coding_assignment12 lastname_firstname_coding_assignment12

   sudo docker build -f Dockerfile.storybook -t lastname_firstname_coding_assignment12_storybook .
   sudo docker run -p 6006:6006 --name lastname_firstname_coding_assignment12_storybook lastname_firstname_coding_assignment12_storybook