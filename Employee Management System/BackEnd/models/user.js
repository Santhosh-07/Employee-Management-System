module.exports=(db,Sequelize)=>{
    let user = db.define('user',{
        id :{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName :Sequelize.STRING(20),
        password :Sequelize.STRING(100),  
        roleId :Sequelize.INTEGER   
    })
    user.association = () => {
        user.belongsTo(role,{
            foreignKey : 'roleId'
        });
    }
    return user;
};