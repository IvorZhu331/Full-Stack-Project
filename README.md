# Vara Project

This repository contains a full-stack application with separate front-end and back-end directories. The front-end is built using React and includes visualization capabilities via Chart.js. The back-end is built on Express and integrates with Google APIs.

## Prerequisites

Before you begin, ensure you have met the following requirements:

### Node.js and npm

You'll need Node.js and npm installed on your computer to run this project. npm (Node Package Manager) is distributed with Node.js, which means that when you download Node.js, you automatically get npm installed on your computer.

### Installing Node.js and npm

#### Windows:

1. **Download the Windows installer** from the [Node.js website](https://nodejs.org/).
2. **Run the installer**:
   - Open the downloaded Node.js `.msi` installer file from your browser or file manager.
   - Follow the prompts in the setup wizard. Make sure to include "npm package manager" in your installation options.
3. **Verify the installation** by opening Command Prompt and running:
   ```bash
   node -v
   npm -v
   ```
This should display the Node.js and npm version if the installation was successful.

#### macOS:

1. Install using Homebrew (recommended):
   - If you don’t have Homebrew installed, open your terminal and paste:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Then, install Node.js and npm by running:
     ```bash
     brew install node
     ```
2. Alternatively, download the macOS installer:
   - Go to the [Node.js website](https://nodejs.org/) website and download the macOS installer.
   - Follow the instructions to install Node.js and npm. The installer should set up everything needed.
3. Verify the installation in your terminal:
   ```bash
   node -v
   npm -v
   ```
This will show the installed versions of Node.js and npm, confirming the installation.

## Installation

To get started with this project, clone the repository and install dependencies for both the front-end and back-end.

### Cloning the Repository

```bash
git clone https://github.com/IvorZhu331/Full-Stack-Project.git
cd full-stack-project
```

### Install Front-End Dependencies

```bash
cd front-end
npm install
cd ..
```

### Install Back-End Dependencies

```bash
cd back-end
npm install
cd ..
```

### Install Concurrently

```bash
npm install
```

## Usage

This project uses `concurrently` to run both the front-end and back-end servers with a single command. To start both servers:

```bash
npm start
```

This will launch the front-end React application on `localhost:3000` and the back-end Express server on `localhost:3001`.
