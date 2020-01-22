module.exports = (db, Sequelize) => {
    let query = db.define('query', {
        queryId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        employeeId: Sequelize.INTEGER,
        queryMessage: Sequelize.STRING(100),
        response: Sequelize.STRING(200),
        queryStatus: Sequelize.STRING(20)
    });

    query.association = () => {
        query.belongsTo(employee, {
            foreignKey : 'employeeId'
        });
    }

    return query;
}