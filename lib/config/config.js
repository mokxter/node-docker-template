const environments = {};

environments.development = {
    httpPort: process.env.HTTP_PORT || 3000,
    httpAddress: process.env.HOST || '0.0.0.0',
    envName: 'development',
    log: {
        level: process.env.LOG_LEVEL,
    },
};

const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

const environmentToExport = typeof environments[currentEnvironment] === 'object' ? environments[currentEnvironment] : environments.development;

module.exports = environmentToExport;

