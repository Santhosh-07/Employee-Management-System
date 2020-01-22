module.exports = (db, Sequelize) => {
    let difficulty = db.define('difficulty', {
        difficultyId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        difficultyLevel: Sequelize.STRING(10)
    });

    difficulty.association = () => {
        difficulty.hasMany(task, {
            foreignKey : 'difficultyId'
        });
    }

    return difficulty;
}