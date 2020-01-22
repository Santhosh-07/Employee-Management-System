// Project Team Task Status table
function insertProjectStatus(userInfo){
    return new Promise((resolve,reject) =>{
        return projectStatus.create(userInfo).then((response) => {
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function updateProjectStatus(userInfo,projectStatusId){
    return new Promise((resolve,reject) =>{
        return projectStatus.update(userInfo,{
            where: {
                projectStatusId:projectStatusId
            }
        }).then((response) => {
            return resolve("UPDATED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function searchProjectStatus(projectStatusId){
    return new Promise((resolve,reject) =>{
        return projectStatus.findAll({
            include:[{
                model: project,
                attributes:['projectId','projectName'],
                include:[{
                    model: team,
                    attributes:['teamId']
                }]
            }],
            where: {
                projectStatusId:projectStatusId
            }
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function fetchProjectStatus(){
    return new Promise((resolve,reject) =>{
        return projectStatus.findAll().then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

module.exports = {
    insertProjectStatus: insertProjectStatus,
    fetchProjectStatus: fetchProjectStatus,
    updateProjectStatus: updateProjectStatus,
    searchProjectStatus: searchProjectStatus
}