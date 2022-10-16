const sequelize = require("sequelize");
const db = require("../config/db.config");
var projects = db.define(
    "projects",
    {
        id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: sequelize.STRING, required: true },
        //password: { type: sequelize.STRING },
        //token: { type: sequelize.STRING },
    },
    {
        // freeze name table not using *s on name
        createdAt: true,
        updatedAt: true,
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: false,
    }
);
module.exports = projects;