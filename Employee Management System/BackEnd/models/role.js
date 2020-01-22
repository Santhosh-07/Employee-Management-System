module.exports = (db, Sequelize) => {
    let role = db.define('role', {
        roleId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        roleName: Sequelize.STRING(20),
        comments: Sequelize.STRING(50)
    });

    role.association = () => {
        role.hasMany(employee,{
            foreignKey : 'roleId'
        });
    }

    return role;
}
