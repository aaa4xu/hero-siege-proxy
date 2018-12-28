const requestJs = require('request');
const { promisify } = require('util');

const request = promisify(requestJs);

class HSHttpClient {
    constructor(backendIp) {
        this._backendIp = backendIp;
    }

    proxy(method, url, headers, body) {
        const options = {
            url: `http://${this._backendIp}${url}`,
            method,
            headers,
            form: method === 'POST' ? body : undefined,
        };

        return request(options);
    }
}

module.exports = HSHttpClient;
