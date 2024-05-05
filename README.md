# Cloud Dashboard Manager

## Overview

Cloud Application Manager is a web application designed for managing application deployments and health monitoring on the cloud. It provides users with a dashboard interface where they can monitor various metrics and manage environment variables for different applications.

## Features

- Side and top navigation bars for easy access to different sections of the application
- Dashboard with overview and environment variables tabs for each application
- View application version and live status in the overview tab
- Monitor CPU and memory metrics with timetrend in the overview tab
- View deployment history for each application
- Manage environment variables for each application
- Ability to switch between multiple applications using the applications dropdown in the top navigation bar
- Retain environment variables in local storage for persistence across page refreshes

## Tech Stack

The Cloud Application Manager is built using the following technologies:

- **Frontend**:
  - React: JavaScript library for building user interfaces
  - Material-UI: React component library for building UIs with Material Design
  - TypeScript: Superset of JavaScript with static typing
  - React Router: Library for routing in React applications
  - Context API: React feature for managing global state
  - Axios: Promise-based HTTP client for making HTTP requests
  - Vercel: Deployment platform for hosting the application online

## Installation

To run the Cloud Application Manager application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/cloud-application-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cloud-application-manager
   ```

3. Create a `.env` file in the root directory of the project.

4. Add the following environment variables to the `.env` file:

   ```plaintext
   VITE_APP_API_URL=https://retoolapi.dev/
   VITE_APP_APPLICATIONS_API_KEY=71NNjB/applications
   VITE_APP_MEMORY_UTILIZATION_API_KEY=ybFVVH/memoryutilization
   VITE_APP_CPU_UTILIZATION_API_KEY=Ymxfa2/cpuutilization
   VITE_APP_EVENT_HISTORY_API_KEY=TYjDIe/eventhistory
   ```

5. Install dependencies:

   ```bash
   npm install
   ```

6. Start the development server:

   ```bash
   npm start
   ```

7. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Tech Documentation

### Custom Hooks

The Cloud Application Manager utilizes custom hooks to manage data fetching and state management. The `useFetchAppData` hook is responsible for fetching application data from APIs and updating the application state. It ensures that data is fetched and updated before rendering the UI, providing a seamless user experience.

### Error Boundary

An error boundary component is implemented in the Cloud Application Manager to catch JavaScript errors that occur during the rendering of React components. It ensures that the application remains functional and user-friendly even when errors occur by providing a fallback UI in case of errors.

### Material-UI

Material-UI is used extensively in the Cloud Application Manager to create a clean and visually appealing user interface. It provides pre-designed and customizable components for building modern web applications with Material Design.

### TypeScript

TypeScript is used throughout the Cloud Application Manager to ensure type safety and provide better developer tooling and documentation. It helps catch errors early in the development process and improves code quality and readability.

### React Router

React Router is used for routing in the Cloud Application Manager, allowing users to navigate between different views or pages. It defines routes for different components, enabling users to switch between the overview and environment variables tabs for each application.

### Vercel

Vercel is used as the deployment platform for hosting the Cloud Application Manager online. It provides a seamless deployment experience with built-in CI/CD pipelines, automatic SSL certificates, and global CDN distribution.

## Deployment

The Cloud Application Manager application is deployed on Vercel and is accessible online. You can view it [here](https://cloud-dashboard-manager.vercel.app/).
