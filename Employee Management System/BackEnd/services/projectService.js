// Project table
function insertProject(userInfo){
    return new Promise((resolve,reject) =>{
        return project.create(userInfo).then((response) => {
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function fetchProject(){
    return new Promise((resolve,reject) =>{
        return project.findAll().then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function updateProject(userInfo,projectId){
    return new Promise((resolve,reject) =>{
        return project.update(userInfo,{
            where: {
                projectId:projectId
            }
        }).then((response) => {
            return resolve("UPDATED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function searchProject(projectId){
    return new Promise((resolve,reject) =>{
        return project.findOne({
            attributes:['projectId','projectName'],
            include:[{
                model: team,
                attributes: ['employeeId'],
                include: [{
                    model: employee,
                    attributes: ['userId','name'],
                    include: [{
                        model:role,
                        attributes: ['roleName']
                    }]
                }]
            }],
            where: {
                projectId:projectId
            }
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject(ERROR.failure );
        })
    })
}

module.exports = {
    insertProject: insertProject,
    fetchProject: fetchProject,
    updateProject: updateProject,
    searchProject: searchProject 
}