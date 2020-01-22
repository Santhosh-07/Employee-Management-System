module.exports = (db, Sequelize) => {
    let team = db.define('team', {
        id: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        teamId: Sequelize.INTEGER,
        projectId: Sequelize.INTEGER,
        employeeId: Sequelize.INTEGER
    });

    team.association = () => {
        team.hasMany(project, {
            foreignKey : 'projectId'
        });
        team.hasMany(employee, {
            foreignKey : 'employeeId'
        });
    }

    return team;
}