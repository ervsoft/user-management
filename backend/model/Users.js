const sequelize = require("sequelize");
const db = require("../config/db.config");
var users = db.define(
    "users",
    {
        id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        username: { type: sequelize.STRING, required: true },
        password: { type: sequelize.STRING, required: true },
        phone: { type: sequelize.STRING },
        email: { type: sequelize.STRING, required: true },
        isActive: { type: sequelize.BOOLEAN, defaultValue: true },
        //password: { type: sequelize.STRING },
        //token: { type: sequelize.STRING },
    },
    {
        // freeze name table not using *s on name
        raw: true,
        createdAt: true,
        updatedAt: true,
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: true,
    }
);
module.exports = users;