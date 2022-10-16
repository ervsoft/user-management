//const Project = require('../model/Projects');
const Project = require('../model/Users');


const insert = (data) => {
    return Project.create(data);
};
const list = () => {
    return Project.findAll();
};
const loginUser = (data) => {
    return Project.findOne(data);
};
const logoutUser = (data) => {
    return Project.findOne(data);
};
const show = (data) => {
    return Project.findAll(data);
};
const destroy = (data) => {
    //return Project.destroy({ where: data });
    return Project.destroy(data);
};
const update = (data) => {
    return Project.update(data);
};
// WILL BE CREATE CUSTOM MODULE CRETION BY USING CUSTOM CODE

module.exports = {
    insert,
    list,
    show,
    destroy,
    update,
    loginUser,
    logoutUser,
};              