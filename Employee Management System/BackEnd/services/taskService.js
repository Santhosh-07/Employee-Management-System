// Task table
function insertTask(userInfo){
    return new Promise((resolve,reject) =>{
        return task.create(userInfo).then((response) => {
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function updateTask(userInfo,taskId){
    return new Promise((resolve,reject) =>{
        return task.update(userInfo,{
            where: {
                taskId:taskId
            }
        }).then((response) => {
            return resolve("UPDATED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function searchTask(taskId){
    return new Promise((resolve,reject) =>{
        return task.findOne({
            where: {
                taskId:taskId
            }
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function fetchTask(){
    return new Promise((resolve,reject) =>{
        return task.findAll().then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

module.exports = {
    insertTask: insertTask,
    fetchTask: fetchTask,
    updateTask: updateTask,
    searchTask: searchTask
}