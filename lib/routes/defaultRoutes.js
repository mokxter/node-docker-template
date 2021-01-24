const defaultController = require('../controllers/defaultController');

const defaultRoutes = [
    {
        name: 'Home',
        method: 'get',
        path: '/',
        handler: defaultController.home,
    }
];

module.exports = defaultRoutes;
