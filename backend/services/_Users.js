const User = require('../model/Users');

const insert = (data) => {
    return User.create(data);
};
const list = () => {
    return User.findAll();
};
const show = (data) => {
    return User.findAll(data);
};
const destroy = (data) => {
    //return User.destroy({ where: data });
    return User.destroy(data);
};
const update = (data) => {
    return User.update(data);
};
// WILL BE CREATE CUSTOM MODULE CRETION BY USING CUSTOM CODE

module.exports = {
    insert,
    list,
    show,
    destroy,
    update,
};              