// Query table
function insertQuery(userInfo){
    return new Promise((resolve,reject) =>{
        return query.create(userInfo).then((response) => {
            return resolve("SUCCESS!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function updateQuery(userInfo,queryId){
    return new Promise((resolve,reject) =>{
        return query.update(userInfo,{
            where: {
                queryId:queryId
            }
        }).then((response) => {
            return resolve("UPDATED!");
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function searchQuery(queryId){
    return new Promise((resolve,reject) =>{
        return query.findOne({
            include:[{
                model: employee,
                attributes:['userId'],
                include: [{
                    model: role,
                    attributes:['roleName']
                },{
                    model: task,
                    attributes:['taskName']
                }]
            }],
            where: {
                queryId:queryId
            }
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function fetchQuery(){
    return new Promise((resolve,reject) =>{
        return query.findAll().then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

module.exports = {
    insertQuery: insertQuery,
    updateQuery: updateQuery,
    searchQuery: searchQuery,
    fetchQuery: fetchQuery
}