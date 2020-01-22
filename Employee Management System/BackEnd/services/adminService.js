// function updateAdmin(userInfo, employeeId){
//     return new Promise((resolve,reject) =>{
//         user.update(userInfo,{
//             where: {
//                 id: employeeId
//             }
//         }).then((response) => {
//             resolve("SUCCESS!")
//         }).catch((error) => {
//             console.log(error.message);
//         })
//     })
// }

function searchAdmin(adminId){
    return new Promise((resolve,reject)=>{
      admin.findAll({
            where: {
                adminId: adminId
            }
        }).then((response)=>{
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject(ERROR.failure);
        });
    });
}

module.exports = {
    searchAdmin: searchAdmin
}