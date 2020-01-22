module.exports = (db, Sequelize) => {
    let project = db.define('project',{
        projectId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        projectName: Sequelize.STRING(50),
        description: Sequelize.STRING(50),
        projectStatusId: Sequelize.INTEGER
    });

    project.association = () => {
        project.hasMany(employee, {
            foreignKey : 'projectId'
        });
        project.belongsTo(projectStatus, {
            foreignKey : 'projectStatusId'
        });
        project.belongsTo(team, {
            foreignKey : 'projectId'
        });
    }

    return project;
}