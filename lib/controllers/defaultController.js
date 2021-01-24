const defaultController = {};

defaultController.home = function home (_req, reply) {
    reply.send({ hello: 'world' });
};

module.exports = defaultController;
