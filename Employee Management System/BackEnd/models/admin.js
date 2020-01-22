module.exports = (db, Sequelize) => {
    let admin = db.define('admin', {
        adminId: {
            type: Sequelize.STRING(20)
        },
        password: Sequelize.STRING(150)
    });

    return admin;
}