const Sequelize = require('sequelize');
const connectDB = async () => {
    const sequelize = new Sequelize('usermanagement', 'root', 'rootroot', {
        host: 'localhost',
        dialect: 'mysql',
        logging: true,
        query: { raw: true },
    });

    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully loader/db.js.');
    }
    ).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    }
    );
};
module.exports = {
    connectDB,
} 