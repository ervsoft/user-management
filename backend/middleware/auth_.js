const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) {
        return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Unauthorized middleware authjs line 8 token null' });
    }
    /*  else if (token === undefined) {
         return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Unauthorized middleware authjs line 11 token undefined' });
     } */
    else {
        jwt.verify(token, 'secretVERIFY', (err, user) => {
            if (err) {
                return res.status(httpStatus.FORBIDDEN).json({ message: 'Unauthorized middeware auth.js jwtvery line 16 token not verified', token: token });
            }
            else {
                console.log(token);
                return res.status(httpStatus.OK).json({ message: 'Authorized middeware auth.js jwtvery line 19 token verified', token: token });
            }
            req.user = user;
            next();
        });
    }
};

module.exports = authenticate;
