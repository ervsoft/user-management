const { insert, list, show, destroy, update, loginUser, logoutUser } = require('../services/Projects'); // this is the line that is causing the error
const httpStatus = require('http-status');
const { toEncrypt } = require('../module/moduleEncrypt');
const { access, verify, refresh } = require('../module/moduleToken');

const create = (req, res) => {
    req.body.password = toEncrypt(req.body.password);
    let data = req.body;
    insert(data)
        .then((response) => {
            res.status(httpStatus.CREATED).json(response);
        }
        ).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
        });
};

const index = (req, res) => {
    list()
        .then((response) => {
            res.status(httpStatus.OK).json(response);
        }).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
        });
};

const profile = (req, res) => {
    //res.status(httpStatus.OK).json({ message: 'Profile', data: req.user });
    res.status(httpStatus.OK).json(req.user);

};
const detail = (req, res) => {
    let data = { where: { id: req.params.id } };
    console.log(data);
    show(data)
        .then((response) => {
            res.status(httpStatus.CREATED).json(response);
        }).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
        });
};
const remove = (req, res) => {
    let data = { where: { id: req.params.id } };
    console.log(data);
    destroy(data)
        .then((response) => {
            res.status(httpStatus.CREATED).json(response);
        }).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(e);
        });
};
const revise = (req, res) => {
    update(req.body)
        .then((response) => {
            res.status(httpStatus.CREATED).json(response);
        }).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(e);
        });
};
const logout = (req, res) => {
    logoutUser(req.body)
        .then((response) => {
            res.status(httpStatus.CREATED).json(response);
        }
        ).catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
        }
        );
};
const login = (req, res) => {
    let data = { where: { email: req.body.email, password: toEncrypt(req.body.password) } };
    loginUser(data)
        .then((response) => {
            let user = response.toJSON();
            console.log("user :>> ", user);
            // Securityi sebebiyle ekledım
            delete user.password;
            //delete user.isActivate; 
            delete user.updatedAt;
            delete user.createdAt;
            // Securityi sebebiyle ekledım  
            data = {
                ...user,
                //access_token: access(user),
                token: access(user),
                //refresh_token: refresh(user),
                message: 'Login Successfully',
            };

            //console.log(response.toJSON()); 
            res.status(httpStatus.OK).json(data);
        }
        ).catch((err) => {
            //res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err); 
            console.log('err' + err);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Invalid email or password' });

        }
        );
};



module.exports = {
    create,
    index,
    detail,
    remove,
    revise,
    login,
    logout,
    profile,

}; 