const split = separator => str => str.split(separator);
const process = str => split('§')(str).map(split('|'));

/**
 * Game use client-side password checking, so just removing password from all servers
 * @param {string} body
 * @returns {string}
 */
module.exports = body => {
    return process(body).map(item => {
        if(typeof item[2] === 'string') {
            item[2] = '';
        }

        return item.join('|');
    }).join('§');
};
