/**
 * Proxy game client request to game backend
 * @param {HSHttpClient} client
 * @returns {Function}
 */
module.exports = (client) => async (req, res, next) => {
    try {
        req.backend = {
            success: true,
            response: await client.proxy(req.method, req.url, req.headers, req.body),
        };
    } catch(err) {
        req.backend = {
            success: false,
            error: err,
        }
    }

    console.log({
        request: {
            method: req.method,
            url: req.url,
            body: req.body,
        },
        response: req.backend.response.body || req.backend.error,
    });

    next();
};
