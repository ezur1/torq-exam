
# ip-to-country-torq

This web application, developed as part of an exam project for Torq, enables users to translate IP addresses into corresponding countries and display the local time for each. The application supports simultaneous lookups, input validation, real-time updates, and a user-friendly interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Testing](#testing)

## Installation

1. Clone the repository:
   \`\`\`sh
   git clone https://github.com/ezur1/torq-exam.git
   cd ip-to-country-torq
   \`\`\`

2. Install dependencies:
   \`\`\`sh
   npm install
   \`\`\`

## Usage

To run the application locally:

\`\`\`sh
npm run dev
\`\`\`

Access the app at \`http://localhost:3000\`.

To build for production:

\`\`\`sh
npm run build
\`\`\`

To preview the production build:

\`\`\`sh
npm run preview
\`\`\`

## Project Structure

The project adheres to a typical Vue 3 structure:

- **src/**: Main source code directory.
  - **components/**: Vue components.
  - **store/**: Pinia state management.
  - **App.vue**: Root component.
  - **main.ts**: Entry point.

## Scripts

- \`npm run dev\`: Start the development server.
- \`npm run build\`: Build for production.
- \`npm run preview\`: Preview the production build.
- \`npm run test\`: Run unit tests with Vitest.

## Technologies Used

- **Vue 3**: JavaScript framework.
- **TypeScript**: Static type checking.
- **Pinia**: State management.
- **Vuetify**: Material Design components.
- **Vite**: Frontend tooling.
- **Axios**: HTTP requests.
- **Vitest**: Unit testing.
- **Happy DOM**: DOM implementation for testing.

## Testing

Unit tests are executed using Vitest, with Happy DOM for DOM simulation. Run tests with:

\`\`\`sh
npm run test
\`\`\`
