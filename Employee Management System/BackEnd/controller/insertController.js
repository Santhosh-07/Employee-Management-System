// Controllers for inserting the values

var difficulty = require('../services/difficultyService');
var employee = require('../services/employeeService');
var project = require('../services/projectService');
var projectStatus = require('../services/projectStatusService');
var query = require('../services/queryService');
var role = require('../services/roleService');
var task = require('../services/taskService');
var team = require('../services/teamService');
var user = require('../services/userService');

// Difficulty table
async function createDifficulty(difficultyInfo){
        try{
            let response = await difficulty.insertDifficulty(difficultyInfo);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
}

// Employee Table
async function createEmployee(employeeInfo){
    try{
        let response = await employee.insertEmployee(employeeInfo);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

// User Table
async function createUser(userInfo){
    try{
        let response = await user.insertUser(userInfo);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

// Project Table
async function createProject(projectInfo){
    try{
        let response = await project.insertProject(projectInfo);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}


// ProjectStatus Table
async function createProjectStatus(projectStatusInfo){
    try{
        let response = await projectStatus.insertProjectStatus(projectStatusInfo);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

// Query Table
async function createQuery(queryInfo){
    try{
        let response = await query.insertQuery(queryInfo);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}


//  Role Table
async function createRole(roleInfo){
    try{
        let response = await role.insertRole(roleInfo);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

// Task Table
async function createTask(taskInfo){
    try{
        let response = await task.insertTask(taskInfo);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

// Team Table
async function createTeam(teamInfo){
    try{
        let response = await team.insertTeam(teamInfo);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

module.exports = {
    createDifficulty: createDifficulty,
    createEmployee: createEmployee,
    createProject: createProject,
    createProjectStatus: createProjectStatus,
    createQuery: createQuery,
    createRole: createRole,
    createTask: createTask,
    createTeam: createTeam,
    createUser: createUser
};