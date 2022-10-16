const express = require('express');
const helmet = require('helmet');
const config = require('./config');
const loaders = require('./loaders');
const ProjectRoutes = require('./routes/Projects');
const httpStatus = require('http-status');
const cors = require('cors');
config();
loaders();

//var allRoutes = require('./routes');
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(projectRoutes);

//app.use('/projects', ProjectRoutes);
app.use('/api', ProjectRoutes);






app.listen(process.env.APP_PORT, () => {
    console.log('Server is running on port :   ' + process.env.APP_PORT);
    console.log('test');
    //app.use('/projects', ProjectRoutes);
    app.use('/api', ProjectRoutes);

    /* app.use((req, res, next) => {
        const err = new Error(`${req.url} not found in this server`);
        res.status(httpStatus.OK).json(err.message);

        // loglamala yazılarcak buraya
        next(console.log(err.message));
    }); */

    //app.use('/projects', allRoutes.projectsRoute.router); // 2 
    //app.use('/projects', ProjectRoutes.router); // 2   
    // 2    
    //app.use('/', allRoutes.projectsRoute.router); // 2   
});
