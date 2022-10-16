const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    //const token = req.headers.authorization.split(" ")[1];
    //const decodedToken = jwt.verify(token, 'secret_key');
    //req.userData = decodedToken;
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) {
        return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Unauthorized 1' });
    }
    else {
        jwt.verify(token, 'secretACCESS', (err, decodedToken) => {
            if (err) {
                return res.status(httpStatus.FORBIDDEN).json({ message: 'Unauthorized 2 ', token: token });
            }
            req.user = decodedToken;

            next();
        }
        );
    }
};

module.exports = authenticate;
