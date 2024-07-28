# Dynamic Live Reload

Dynamic Live Reload is a powerful tool that allows you to see changes in your web project in real-time. With easy setup and no complex configuration, you can enhance your development workflow and boost productivity.


## Product Overview

Dynamic Live Reload offers a streamlined setup using `browser-sync` and `chokidar`, ensuring your browser reloads automatically whenever changes are made to your files. It supports multiple file types and offers a configurable delay for reloading.

### Key Features

- **Automatic Browser Reload**: Instantly see changes as you make them.
- **Configurable Delay**: Avoid multiple reloads with a customizable debounce delay.
- **Simple Setup**: Minimal configuration required.
- **File Watching**: Monitors all files in your project, excluding `node_modules` and `.git`.
- **Cross-Platform**: Works on Mac, Windows, and Linux.

## Installation

To get started, clone the repository and install the dependencies.

```sh
git clone https://github.com/saadati-mohammad/dynamic-live-reload.git
cd dynamic-live-reload
npm install
```

## Usage

Start the live-reloading server with:

```sh
npm start
```

Navigate to `http://localhost:3000` in your browser to see your project. Any changes made to the files will trigger a reload after a short delay.

## Project Structure

- **index.html**: The main HTML file for the project.
- **live-reload.js**: JavaScript file setting up the live-reloading functionality.
- **package.json**: Project configuration file, including dependencies and scripts.

## How It Works

1. **BrowserSync Initialization**: Serves files from the current directory and watches for changes.
2. **File Watching**: Utilizes `chokidar` to watch all files, excluding `node_modules` and `.git`.
3. **Debounced Reloading**: Ensures browser reload after a 3-second delay to prevent multiple reloads.

## Technical Overview

This repository consists of:

- **frontend**: A simple HTML file to demonstrate live reloading.
- **live-reload.js**: The core JavaScript for setting up BrowserSync and file watching.

## How to Setup for Development

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server with `npm start`.

## Telemetry & Privacy

Dynamic Live Reload does not collect any telemetry data. Your privacy is our priority.

## Contributing

We welcome contributions! Please follow these steps:

1. Create an issue.
2. Fork the repository and create a branch (`issue-number-short-description`).
3. Make your changes and create a pull request.
4. Ensure you get a LGTM from a core team member.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=saadati-mohammad/dynamic-live-reload,saadati-mohammad/dynamic-live-reload&type=Date)](https://star-history.com/#saadati-mohammad/dynamic-live-reload&saadati-mohammad/dynamic-live-reload&Date)

## License

This project is licensed under the ISC License.

---

### Developer

Mohammad Saadati

