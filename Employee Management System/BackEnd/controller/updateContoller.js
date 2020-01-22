var difficulty = require('../services/difficultyService');
var employee = require('../services/employeeService');
var user = require('../services/userService');
var team = require('../services/teamService');
var project = require('../services/projectService');
var projectStatus = require('../services/projectStatusService');
var query = require('../services/queryService');
var role = require('../services/roleService');
var task = require('../services/taskService');

async function updateDifficulty(difficultyInfo,difficultyId){
        try{
            let response = await difficulty.updateDifficulty(difficultyInfo,difficultyId);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
}

async function updateEmployee(employeeInfo,employeeId){
    try{
        let response = await employee.updateEmployee(employeeInfo,employeeId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function updateTeam(teamInfo,employeeId){
    try{
        let response = await team.updateTeam(teamInfo,employeeId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function updateUser(userInfo,employeeId){
    try{
        let response = await user.updateUser(userInfo,employeeId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function updateProject(projectInfo,projectId){
    try{
        let response = await project.updateProject(projectInfo,projectId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function updateProjectStatus(projectStatusInfo,projectStatusId){
    try{
        let response = await projectStatus.updateProjectStatus(projectStatusInfo,projectStatusId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function updateQuery(queryInfo,queryId){
    try{
        let response = await query.updateQuery(queryInfo,queryId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function updateRole(roleInfo,roleId){
    try{
        let response = await role.updateRole(roleInfo,roleId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function updateTask(taskInfo,taskId){
    try{
        let response = await task.updateTask(taskInfo,taskId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

module.exports = {
    updateDifficulty: updateDifficulty,
    updateEmployee: updateEmployee,
    updateProject: updateProject,
    updateProjectStatus: updateProjectStatus,
    updateQuery: updateQuery,
    updateRole: updateRole,
    updateTask: updateTask,
    updateTeam: updateTeam,
    updateUser: updateUser
};