/*
    EMPLOYEE MANAGEMENT SYSTEM 
    ---------------------------
*/

// imports
Sequelize = require('sequelize');
dataBase = require('./dbConnection');
let express = require('express');
var app = express();
const cors = require('cors');
const schemas = require('./imports');
var bodyParser = require("body-parser");

// routers
var difficulty = require('./router/difficultyRouter.js');
var employee = require('./router/employeeRouter.js');
var user = require('./router/userRouter.js')
var project = require('./router/projectRouter.js');
var projectStatus = require('./router/projectStatusRouter.js');
var query = require('./router/queryRouter.js');
var role = require('./router/roleRouter.js');
var task = require('./router/taskRouter.js');
var team = require('./router/teamRouter.js');
var admin = require('./router/adminRouter.js');
require('./config/message');

// port
const port = 7000;

// input
app.use(cors());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));
app.use(bodyParser.json());

// database connection
dataBase.authenticate().then(async() => { 
    console.log("Connection established successfully...!");
    dataBase.sync({
    //    force:true
    }).then(async() => {
    });
});

// sample
app.get('/', (req, res) => {
    res.send('Application running successfully...!');
});

// routers
app.use('/difficulty',difficulty);
app.use('/employee',employee);
app.use('/project',project);
app.use('/projectStatus',projectStatus);
app.use('/query',query);
app.use('/role',role);
app.use('/task',task);
app.use('/team',team);
app.use('/user',user);
app.use('/admin',admin);

// port
app.listen(port , () => {
    console.log(`Application running successfully in ${port}`);
});
