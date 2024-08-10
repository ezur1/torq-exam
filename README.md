
# ip-to-country-torq

This is a web application built as part of an exam project for Torq company. The application allows users to translate IP addresses into their respective countries and display the local time for each IP address. It supports simultaneous IP address lookups and includes features like input validation, real-time updates, and a user-friendly interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Testing](#testing)

## Installation

1. Clone the repository:

   git clone [<repository-url>](https://github.com/ezur1/torq-exam.git)
   cd ip-to-country-torq

2. Install dependencies:
   npm install

## Usage

To run the application locally, use the following command:

npm run dev


This will start the development server, and you can view the application in your browser at \`http://localhost:3000\`.

To build the application for production:

npm run build


To preview the production build:

npm run preview


## Project Structure

The project follows a standard Vue 3 structure with the following key components:

- **src/**: Contains all the source code.
  - **components/**: Vue components for the application.
  - **store/**: Pinia store for state management.
  - **App.vue**: The root component.
  - **main.ts**: The entry point of the application.

## Scripts

- \`npm run dev\`: Start the development server.
- \`npm run build\`: Build the application for production.
- \`npm run preview\`: Preview the production build.
- \`npm run test\`: Run the unit tests with Vitest.

## Technologies Used

- **Vue 3**: The JavaScript framework for building user interfaces.
- **TypeScript**: For static type checking.
- **Pinia**: State management library for Vue.
- **Vuetify**: Material Design component framework for Vue.
- **Vite**: Next-generation frontend tooling.
- **Axios**: For making HTTP requests.
- **Vitest**: For unit testing.
- **Happy DOM**: DOM implementation used in testing.

## Testing

Unit tests are written using Vitest, and the Happy DOM environment is used to simulate a DOM in the tests. To run the tests, use the following command:

npm run test

