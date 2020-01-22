// Defining the database with name and other properties

dataBase = new Sequelize('employeeManagementSystem','root','NithyaSana',{
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    logging : false
});

module.exports = dataBase;
