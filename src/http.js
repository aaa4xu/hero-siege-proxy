const express = require('express');
const bodyParser = require('body-parser');
const https = require('./https-server');
const proxy = require('./proxy-middleware');
const passwordBypass = require('./bypass-servers-password');

/**
 *
 * @param {HSHttpClient} client
 * @returns {*}
 */
module.exports = (client) => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(proxy(client), (req, res) => {
        if(req.url === '/ingame/herosiege/serverlist_get.php') {
            req.backend.response.body = passwordBypass(req.backend.response.body);
        }

        res.end(req.backend.response.body);
    });

    return https(app);
};
