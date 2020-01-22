function insertUser(userInfo){
    return new Promise((resolve,reject) =>{
        user.create(userInfo).then((response) => {
            resolve("SUCCESS!")
        }).catch((error) => {
            console.log(error.message);
        })
    })
}

function updateUser(userInfo, employeeId){
    return new Promise((resolve,reject) =>{
        user.update(userInfo,{
            where: {
                id: employeeId
            }
        }).then((response) => {
            resolve("SUCCESS!")
        }).catch((error) => {
            console.log(error.message);
        })
    })
}

function searchUser(userName){
    return new Promise((resolve,reject)=>{
      user.findAll({
            where: {
                userName: userName
            }
        }).then((response)=>{
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        });
    });
}

module.exports = {
    searchUser: searchUser,
    insertUser: insertUser,
    updateUser: updateUser
}