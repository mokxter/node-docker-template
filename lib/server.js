const registerRoutes = require('fastify-register-routes');
const fastify = require('fastify')({ logger: true });
const path = require('path');

const config = require('./config/config');

const server = {};
const defaultPath = path.join(__dirname, './routes');

fastify.register(registerRoutes, {
    regex: /((Route)|(Routes))\.js$/,
    showTable: true,
    path: defaultPath,
});

server.start = function start () {
    fastify.listen(config.httpPort, config.httpAddress, (err) => {
        if (!err) {
            fastify.log.info(`The http server is running in ${config.envName} mode and listening on port ${fastify.server.address().port}`);
        } else {
            fastify.log.error(`An error occured while trying to start the http server. Err: ${err}`);
        }
    });
};

server.stop = function stop() {
    fastify.close((err) => {
        if (err) {
            fastify.log.error(`An error occured while trying to stop the http server. Err: ${err}`);
        }
    });
};

module.exports = server;

