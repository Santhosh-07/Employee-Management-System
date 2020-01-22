// Employee table
function insertEmployee(userInfo){
    return new Promise((resolve,reject) =>{
        employee.create(userInfo).then((response) => {
            return resolve(SUCCESS.success);
        }).catch((error) => {
            console.log(error.message);
            return reject(ERROR.failure);
        })
    })
}

function updateEmployee(userInfo,employeeId){
    return new Promise((resolve,reject) =>{
        return employee.update(userInfo,{
            where: {
                employeeId:employeeId
            }
        }).then((response) => {
            return resolve(SUCCESS.updated);
        }).catch((error) => {
            console.log(error.message);
            return reject(ERROR.failure);
        })
    })
}

function searchEmployee(employeeId){
    return new Promise((resolve,reject) =>{
        return employee.findOne({
            attributes:[
                'userId',
                'name',
                'email',
                'employeeStatus'
            ],
            include: [{
                require: false,
                model: role,
                attributes: ['roleName']
            },{
                require: false,
                model: project,
                attributes: ['projectName']
            },{
                require: false,
                model: task,
                attributes: ['task']
            }],
            where: {
                userId:employeeId
            }
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject("FAILED!");
        })
    })
}

function fetchEmployee(employeeId){
    return new Promise((resolve,reject) =>{
        return employee.findOne({
            where: {
                userId:employeeId
            }
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject(ERROR.failure);
        })
    })
}

function fetchAllEmployee(){
    return new Promise((resolve,reject) =>{
        return employee.findAll({
            attributes:['userId','name'],
            include:[{
                model:role,
                attributes:['roleName']
            }]
        }).then((response) => {
            return resolve(response);
        }).catch((error) => {
            console.log(error.message);
            return reject(ERROR.failure);
        })
    })
}

module.exports = {
    insertEmployee: insertEmployee,
    searchEmployee: searchEmployee,
    updateEmployee: updateEmployee,
    fetchEmployee: fetchEmployee,
    fetchAllEmployee: fetchAllEmployee
}