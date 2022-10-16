var crypto = require('crypto');
//let data = '123456';
const toEncrypt = (data) => {
    return crypto.createHash('sha256').update(data).digest('base64');
};
const toDecrypt = (data) => {
    return crypto.createHash('sha256').update(data).digest('base64');
};

module.exports = {
    toEncrypt,
};

//console.log(toEncrypt(data));




