// Defining the tables

admin = require('./models/admin.js')(dataBase, Sequelize);
difficulty = require('./models/difficulty.js')(dataBase, Sequelize);
employee = require('./models/employee.js')(dataBase, Sequelize);
project = require('./models/project.js')(dataBase, Sequelize);
projectStatus = require('./models/projectStatus.js')(dataBase, Sequelize);
query = require('./models/query.js')(dataBase, Sequelize);
role = require('./models/role.js')(dataBase, Sequelize);
task = require('./models/task.js')(dataBase, Sequelize);
team = require('./models/team.js')(dataBase, Sequelize);
user = require('./models/user.js')(dataBase, Sequelize);

// Association

const models = [difficulty, employee, project, projectStatus,
                query,role,task,team,user];

models.forEach((value)=>{
    if(value.association){
        value.association();
    }
});


module.exports = {
    admin: admin,
    difficulty: difficulty,
    employee: employee,
    project: project,
    projectStatus: projectStatus,
    query: query,
    role: role,
    task: task,
    team: team,
    user: user
};
