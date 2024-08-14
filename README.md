# Project Overview
This project was developed for a local organization called **"Inspiration"**, with the goal of creating a modern and responsive landing website designed to attract new visitors and potential customers.

[![Website](https://img.shields.io/website?url=https%3A%2F%2Finspiration-pikalevo.ru%2F&up_message=online&down_message=offline&style=for-the-badge&labelColor=blue)](https://inspiration-pikalevo.ru/)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Nikilandgelo/inspiration_frontend/CICD.yaml?style=for-the-badge&logo=githubactions&logoColor=black&label=CI%2FCD&labelColor=blue)](https://github.com/Nikilandgelo/inspiration_frontend/actions)

## Key Features
- **Responsive Frontend**: Built with [`React`](https://react.dev/), leveraging [`Motion Framer`](https://www.framer.com/motion/) for smooth animations and [`Swiper`](https://swiperjs.com/) for interactive carousels. The design is fully responsive, ensuring an optimal user experience on mobile, tablet, and desktop devices.
- **Background Video Hosting**: The main page features a background video hosted on [`Wistia`](https://wistia.com/), chosen for its reliability and performance. After evaluating alternatives like YouTube, Vimeo, Wistia was selected for its ability to deliver fast, high-quality playback with seamless looping, even for users with slower internet connections.
- **Backend API**: A lightweight backend powered by Python's [`aiohttp`](https://docs.aiohttp.org/en/stable/) framework, which was chosen for its asynchronous capabilities, making it well-suited to efficiently handle I/O-bound tasks. The backend is designed to make its own internal API requests based on user inputs.
- **Containerization**: The entire project is containerized using [`Docker`](https://docs.docker.com/), enabling easy setup and deployment. The use of [`Docker`](https://docs.docker.com/) ensures that the application can be reliably replicated across different environments with minimal configuration.
- **Nginx Configuration**: [`Nginx`](https://docs.nginx.com/) is using as the web server, serving static files and acting as a reverse proxy for the backend API. Custom Nginx configuration ensures secure HTTPS connections and efficient load balancing.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Implemented via [`GitHub Actions`](https://docs.github.com/en/actions), allowing for automated linting and deployment of the application. This ensures that the website remains up-to-date and secure with minimal manual intervention.

## Technologies Used
| **Frontend**                                      | **Video Hosting**                 | **Backend**                                      | **DevOps**                                             |
| -----------                                       | -----------                       | -----------                                      | -----------                                            |
| [`React`](https://react.dev/)                     | [`Wistia`](https://wistia.com/)   | [`Python`](https://www.python.org/)              | [`Docker`](https://docs.docker.com/)                   |
| [`Motion Framer`](https://www.framer.com/motion/) |                                   | [`aiohttp`](https://docs.aiohttp.org/en/stable/) | [`Docker Compose`](https://docs.docker.com/compose/)   |
| [`Swiper`](https://swiperjs.com/)                 |                                   |                                                  | [`Nginx`](https://docs.nginx.com/)                     |
| [`SCSS`](https://sass-lang.com/documentation/)    |                                   |                                                  | [`GitHub Actions`](https://docs.github.com/en/actions) |
