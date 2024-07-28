// dynamic-live-reload.js
const browserSync = require("browser-sync").create();
const chokidar = require("chokidar");

// Initialize BrowserSync
browserSync.init({
    server: {
        baseDir: "./",
        index: "index.html"
    }
});

// Watch all files in the project directory
const watcher = chokidar.watch('.', {
    ignored: /node_modules|\.git/,
    persistent: true
});

let timeout;

watcher.on('all', (event, path) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log(`File ${path} has been ${event}`);
        browserSync.reload();
        console.log('Browser reloaded!');
    }, 3000); // 3 seconds delay
});

console.log("Watching for file changes...");
