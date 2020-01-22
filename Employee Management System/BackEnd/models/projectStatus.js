module.exports = (db, Sequelize) => {
    let projectStatus = db.define('projectStatus', {
        projectStatusId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        status: Sequelize.STRING(20)
    });

    projectStatus.association = () =>{
        projectStatus.hasMany(project, {
            foreignKey : 'projectStatusId'
        });
        projectStatus.hasMany(task, {
            foreignKey : 'projectStatusId'
        });
    }

    return projectStatus;
}