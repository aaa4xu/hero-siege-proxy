const server = require('./src/http');
const HSHttpClient = require('./src/HSHttpClient');

const client = new HSHttpClient('62.248.134.47');

// @see https://certificatetools.com/newui/ self-signed certs
server(client);
