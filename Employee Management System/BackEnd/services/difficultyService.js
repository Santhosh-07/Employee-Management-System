// Difficulty table
function insertDifficulty(userInfo){
    return new Promise((resolve,reject) =>{
        return difficulty.create(userInfo).then((response) => {
            return resolve(SUCCESS.success);
        }).catch((error) => {
            console.log(error.message);
            return reject(ERROR.failure);
        })
    })
}

function updateDifficulty(userInfo,difficultyId){
    return new Promise((resolve,reject) =>{
        return difficulty.update(userInfo,{
            where: {
                difficultyId:difficultyId
            }
        }).then((response) => {
            return resolve(SUCCESS.updated);
        }).catch((error) => {
            console.log(error.message);
            return reject(ERROR.failure);
        })
    })
}

function searchDifficulty(difficultyId){
    return new Promise((resolve,reject) =>{
        return difficulty.findAll({
            include:[{
                model: task,
                attributes:['taskId','taskName'],
                include:[{
                    model: employee,
                    attributes: ['userId']
                }]
            }],
            where: {
                difficultyId:difficultyId
            }
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject(ERROR.failure);
        })
    })
}

function fetchDifficulty(){
    return new Promise((resolve,reject) =>{
        return difficulty.findAll().then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject(ERROR.failure);
        })
    })
}

module.exports = {
    insertDifficulty : insertDifficulty,
    updateDifficulty : updateDifficulty,
    searchDifficulty : searchDifficulty,
    fetchDifficulty: fetchDifficulty
};
    