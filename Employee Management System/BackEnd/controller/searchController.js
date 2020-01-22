// Controllers for both searching and fetching the data

var admin = require('../services/adminService')
var difficulty = require('../services/difficultyService');
var employee = require('../services/employeeService');
var project = require('../services/projectService');
var projectStatus = require('../services/projectStatusService');
var query = require('../services/queryService');
var role = require('../services/roleService');
var task = require('../services/taskService');
var team = require('../services/teamService');
var user = require('../services/userService');

async function searchAdmin(adminId){
    try{
        let response = await admin.searchAdmin(adminId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function searchDifficulty(difficultyId){
        try{
            let response = await difficulty.searchDifficulty(difficultyId);
            return response;
        }
        catch(errorMessage){
           throw new Error(errorMessage);
        }
}

async function fetchDifficulty(){
    try{
        let response = await difficulty.fetchDifficulty();
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function searchEmployee(employeeId){
    try{
        let response = await employee.searchEmployee(employeeId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function fetchEmployee(employeeId){
    try{
        let response = await employee.fetchEmployee(employeeId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function fetchAllEmployee(){
    try{
        let response = await employee.fetchAllEmployee();
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function searchProject(projectId){
    try{
        let response = await project.searchProject(projectId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function fetchProject(){
    try{
        let response = await project.fetchProject();
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function searchProjectStatus(projectStatusId){
    try{
        let response = await projectStatus.searchProjectStatus(projectStatusId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function fetchProjectStatus(){
    try{
        let response = await projectStatus.fetchProjectStatus();
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function searchQuery(queryId){
    try{
        let response = await query.searchQuery(queryId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function fetchQuery(){
    try{
        let response = await query.fetchQuery();
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function searchRole(roleId){
    try{
        let response = await role.searchRole(roleId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function fetchRole(){
    try{
        let response = await role.fetchRole();
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function searchRoleWithDetails(roleId){
    try{
        let response = await role.searchRoleWithDetails(roleId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function searchTask(taskId){
    try{
        let response = await task.searchTask(taskId);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function fetchTask(){
    try{
        let response = await task.fetchTask();
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function searchTeam(userInfo){
    try{
        let response = await team.searchTeam(userInfo);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function fetchTeam(){
    try{
        let response = await team.fetchTeam();
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

async function searchUser(userName){
    try{
        let response = await user.searchUser(userName);
        return response;
    }
    catch(errorMessage){
       throw new Error(errorMessage);
    }
}

module.exports = {
    searchAdmin: searchAdmin,
    searchDifficulty: searchDifficulty,
    fetchDifficulty: fetchDifficulty,
    fetchEmployee:fetchEmployee,
    fetchAllEmployee: fetchAllEmployee,
    searchEmployee: searchEmployee,
    searchProject: searchProject,
    fetchProject: fetchProject,
    searchProjectStatus: searchProjectStatus,
    fetchProjectStatus: fetchProjectStatus,
    searchQuery: searchQuery,
    fetchQuery: fetchQuery,
    searchRole: searchRole,
    fetchRole: fetchRole,
    searchRoleWithDetails: searchRoleWithDetails,
    searchTask: searchTask,
    fetchTask: fetchTask,
    searchTeam: searchTeam,
    fetchTeam: fetchTeam,
    searchUser: searchUser
};