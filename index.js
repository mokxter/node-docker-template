const process = require('process');
const server = require('./lib/server');

const app = {}


app.init = function init() {
    server.start();
};

app.shutdown = function shutdown() {
    server.stop();
    process.exit();
};

process.on('SIGINT', () => {
    console.log('Got SIGINT, gracefully shutting down');
    app.shutdown();
});

process.on('SIGTERM', () => {
    console.log('Got SIGTERM, gracefully shutting down');
    app.shutdown();
});

app.init();

module.exports = app;
