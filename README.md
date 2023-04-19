# Tasker

👋 Hi there, welcome to Tasker!

🚀 This is a simple CRUD app built with Typescript that allows you to save tasks of the type `task: clean house, status: done|doing|todo`.

## Technologies Used

💻 We used amazing technologies to make this project a reality, such as:

- ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white&style=flat) for write code;
- ![Express](https://img.shields.io/badge/-Express-000000?logo=express&style=flat) for build a REST API;
- ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=flat) on GCP;
- ![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-2088FF?logo=github-actions&logoColor=white&style=flat) for CI/CD;
- ![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white&style=flat) to package the project, which is saved in the GCP Registry;
- ![Google Cloud Run](https://img.shields.io/badge/-Google%20Cloud%20Run-4285F4?logo=google-cloud&logoColor=white&style=flat) integrated directly with our CI/CD.

## How to Run the Project

To run Tasker locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/tasker.git`;
2. Install the dependencies: `npm install`;
3. Run the project: `npm start`.

To run Tasker with Docker, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/tasker.git`;
2. Create a Docker image of the project: `docker build -t tasker .`;
3. Run the container: `docker run -p 8080:8080 tasker`.

## Contributing

👨‍💻 We hope you enjoy Tasker as much as we enjoyed building it. Feel free to explore it and contribute to its improvement. 

### How to Contribute

1. Fork the repository;
2. Create a branch with your contribution: `git checkout -b my-contribution`;
3. Make the necessary changes;
4. Commit your changes: `git commit -m 'My Contribution'`;
5. Push to your branch: `git push origin my-contribution`;
6. Open a Pull Request.

### How to Report Bugs

If you find any bugs in Tasker, please open a new issue informing the details about the problem you encountered.
