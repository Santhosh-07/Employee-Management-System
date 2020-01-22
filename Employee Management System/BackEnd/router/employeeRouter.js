const express = require('express');
const router = express.Router();
const insertController = require('../controller/insertController');
const updateController = require('../controller/updateContoller.js');
const searchController = require('../controller/searchController');
const bcrypt = require('bcrypt');

router.post('/insert' , async (req,res) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const employeeInfo = {
            name: req.body.name,
            gender: req.body.gender,
            mobile: req.body.mobile,
            email: req.body.email,
            dob: req.body.dob,
            qualificationMajor: req.body.qualificationMajor,
            experience: req.body.experience,
            roleId: req.body.roleId,
            userId: req.body.userId,
            password: hashedPassword,
            passwordHint: req.body.passwordHint,
            projectId: req.body.projectId,
            employeeStatus: req.body.employeeStatus
        }

        // Storing the details of the employees to the login table along with their passwor and role
        const loginInfo = {
            userName: req.body.userId,
            password: hashedPassword,
            roleId: req.body.roleId 
        }

        // Storing the team details along with their project ID
        const teamInfo = {
            teamId: req.body.projectId,
            projectId: req.body.projectId
        }
        let login = await insertController.createUser(loginInfo);
        let team = await insertController.createTeam(teamInfo);
        let response = await insertController.createEmployee(employeeInfo);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/update' , async (req,res) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const employeeInfo = {
            employeeId: req.body.employeeId,
            name: req.body.name,
            gender: req.body.gender,
            mobile: req.body.mobile,
            email: req.body.email,
            dob: req.body.dob,
            qualificationMajor: req.body.qualificationMajor,
            experience: req.body.experience,
            roleId: req.body.roleId,
            userId: req.body.userId,
            password: hashedPassword,
            passwordHint: req.body.passwordHint,
            projectId: req.body.projectId,
            employeeStatus: req.body.employeeStatus
        }

        const loginInfo = {
            userName: req.body.userId,
            password: hashedPassword,
            roleId: req.body.roleId 
        }

        const teamInfo = {
            teamId: req.body.projectId,
            projectId: req.body.projectId,
            employeeId: req.body.employeeId
        }
        let response = await updateController.updateEmployee(employeeInfo,req.body.employeeId);
        let login = await updateController.updateUser(loginInfo,req.body.employeeId);
        let team = await updateController.updateTeam(teamInfo,req.body.employeeId);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/search' , async (req,res) => {
    try{
        let response = await searchController.searchEmployee(req.body.userId);
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/fetch' , async (req,res) => {
    try{
        let response = await searchController.fetchEmployee(req.body.employeeId);
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/fetchall' , async (req,res) => {
    try{
        let response = await searchController.fetchAllEmployee();
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});


module.exports = router;