const jwt = require('jsonwebtoken');
const access = (data) => {
    return jwt.sign(data, 'secretACCESS', { expiresIn: '24h' });
};
const refresh = (data) => {
    return jwt.sign(data, 'secretREFRESH', { expiresIn: '24h' });
}
const verify = (data) => {
    return jwt.verify(data, 'secretVERIFY', { expiresIn: '24h' });
}
module.exports = {
    access,
    refresh,
    verify,
}; 