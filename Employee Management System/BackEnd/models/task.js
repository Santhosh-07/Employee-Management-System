 module.exports = (db, Sequelize) => {
    let task = db.define('task', {
        taskId: {
            type: Sequelize.INTEGER,
            primaryKey : true
        },
        task: Sequelize.STRING(20),
        difficultyId: Sequelize.INTEGER,
        employeeId: Sequelize.INTEGER,
        comments: Sequelize.STRING(20),
        projectStatusId: Sequelize.INTEGER
    });

    task.association = () => {
        task.belongsTo(difficulty, {
            foreignKey : 'difficultyId'
        });
        task.hasMany(employee, {
            foreignKey : 'employeeId'
        });
        task.belongsTo(projectStatus, {
            foreignKey : 'statusId'
        });
    }

    return task;
 }