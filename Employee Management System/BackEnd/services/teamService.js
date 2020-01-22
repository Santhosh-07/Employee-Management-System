// Team table
function insertTeam(teamInfo){
    return new Promise((resolve,reject) =>{
    
        return team.create(teamInfo).then((response) => {
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function updateTeam(teamInfo, employeeId){
    return new Promise((resolve,reject) =>{
        team.update(teamInfo,{
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

function searchTeam(teamId){
    return new Promise((resolve,reject) =>{
        return team.findAll({
            attributes: ['teamId','employeeId'],
            include:[{
                model: employee,
                attributes: ['userId','name'],
                include:[{
                    model: role,
                    attributes: ['roleName']
                }]
            }],
            where: {
                teamId:teamId
            }
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function fetchTeam(){
    return new Promise((resolve,reject) =>{
        return team.findAll().then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

module.exports = {
    insertTeam: insertTeam,
    fetchTeam: fetchTeam,
    searchTeam: searchTeam,
    updateTeam: updateTeam
}