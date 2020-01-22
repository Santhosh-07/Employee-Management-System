module.exports = (db, Sequelize) => {
    let employee = db.define('employee', {
        employeeId: {
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: Sequelize.STRING(20),
        gender: Sequelize.STRING(10),
        mobile: Sequelize.BIGINT(10),
        email: Sequelize.STRING(50),
        dob: Sequelize.DATE,
        qualificationMajor: Sequelize.STRING(10),
        experience: Sequelize.INTEGER,
        roleId: Sequelize.INTEGER,
        userId: Sequelize.STRING(10),
        password: Sequelize.STRING(100),
        passwordHint: Sequelize.STRING(50),
        projectId: Sequelize.INTEGER,
        employeeStatus: Sequelize.STRING(10)
    });

    
    employee.association = () => {
        employee.belongsTo(role, {
            foreignKey : 'roleId'
        });
        employee.belongsTo(project, {
            foreignKey : 'projectId'
        });
        employee.belongsTo(team, {
            foreignKey : 'employeeId'
        });
        employee.belongsTo(task, {
            foreignKey : 'employeeId'
        });
        employee.hasMany(query, {
            foreignKey : 'employeeId'
        });
    }
    return employee;
};
