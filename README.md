# Workflow CA

This project is part of the Workflow Course Assignment at Noroff.  
It includes a JavaScript front-end with **end-to-end (E2E) testing** using **Playwright**.


## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/inastefansdottir/workflow-repo-ca-ina.git
cd workflow-repo-ca-ina
```

### 2. Install Dependencies

Install all dependencies required for the project:

```bash
npm install
```

This will install:
- Playwright - for automated browser testing
- dotenv - for managing environment variables
- live-server - for running the project locally

### 3. Environment variables

This project uses a `.env` file to store sensitive test credentials.
You must create a `.env` file in the **root directory** of the project.
The project contains a `.env.example` file to show an example of how to set up the `.env` file.

**Important Notes:**
- Do **not** commit your `.env` file to GitHub.
- The `.env` file is already listed in `.gitignore`.

### 4. Start the local Server

Run the local development server using:

```bash
npm run start
```
This command uses **live-server** and serves your project at a local address (for example: `http://127.0.0.1:5500`).
You can now open the project in your browser to view and test it manually.

## Running Tests

### Vitest Unit Tests
Run the unit tests using:

```bash
npm run test
```

### Playwright tests

Playwright is configured to handle all **end-to-end** (E2E) tests.
Playwright test files are located in the `/e2e` folder.

#### Run All Tests

```bash
npx playwright test
```

#### Run a Specific Test File

```bash
npx playwright test e2e/login.spec.js
npx playwright test e2e/navigation.spec.js
```

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES Modules)**
- **PLaywright** - Automated browser testing
- **dotenv** - Environment varaible management
- **live-server** - Local web server
