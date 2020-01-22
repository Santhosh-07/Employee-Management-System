// Role table
function insertRole(userInfo){
    return new Promise((resolve,reject) =>{
        return role.create(userInfo).then((response) => {
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function deleteRole(id){
    return new Promise((resolve,reject) =>{
        return role.destroy({
            where: {
                id:id
            }
        }).then((response) => {
            return resolve("DELETED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function updateRole(userInfo,roleId){
    return new Promise((resolve,reject) =>{
        return role.update(userInfo,{
            where: {
                roleId:roleId
            }
        }).then((response) => {
            return resolve("UPDATED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function searchRole(roleId){
    return new Promise((resolve,reject) =>{
        return role.findOne({
            attributes:['roleName'],
            include:[{
                model:employee,
                attributes:['userId']
            }],
            where: {
                roleId:roleId
            }
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function fetchRole(){
    return new Promise((resolve,reject) =>{
        return role.findAll().then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function searchRoleWithDetails(id){
    return new Promise((resolve,reject) =>{
        return role.findOne({
            attributes:['roleId','roleName'],
            include: [{
                model: employee,
                attributes: ['userId','name']
            }],
            where: {
                roleId:id
            }
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

module.exports = {
    insertRole: insertRole,
    updateRole: updateRole,
    searchRole: searchRole,
    deleteRole: deleteRole,
    fetchRole: fetchRole,
    searchRoleWithDetails: searchRoleWithDetails
}