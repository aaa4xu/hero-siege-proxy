const { promises: fs } = require('fs');
const https = require('https');

module.exports = (app) => {
    return Promise.all([
        fs.readFile('./storage/https/hero-siege.crt'),
        fs.readFile('./storage/https/hero-siege.key'),
    ]).then(([cert, key]) => {
        return new Promise((resolve, reject) => {
            // @TODO Handle server starting errors
            const server = https.createServer({ key, cert }, app).listen(443, () => {
                console.log(`Server started at https://localhost/`);
                resolve(server);
            });
        });
    });
};
