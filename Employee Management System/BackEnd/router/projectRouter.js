const express = require('express');
const router = express.Router();
const insertController = require('../controller/insertController');
const updateController = require('../controller/updateContoller.js');
const searchController = require('../controller/searchController');

router.post('/insert' , async (req,res) => {
    try{
        const us = {
            projectId: req.body.projectId,
            projectName: req.body.projectName,
            description: req.body.description,
            employeeId: req.body.employeeId,
            projectStatusId: req.body.projectStatusId
        }
        let response = await insertController.createProject(us);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/update' , async (req,res) => {
    try{
        const us = {
            projectId: req.body.projectId,
            projectName: req.body.projectName,
            description: req.body.description,
            employeeId: req.body.employeeId,
            projectStatusId: req.body.projectStatusId
        }
        let response = await updateController.updateProject(us,req.body.projectId);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/fetch' , async (req,res) => {
    try{
        let response = await searchController.fetchProject();
        if(response.length == 0){
            res.send('PROJECT '+ ERROR.empty)
        }
        else
            res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/search' , async (req,res) => {
    try{
        projectId = req.body.projectId;
        let response = await searchController.searchProject(projectId);
        if(response == null){
            res.send('PROJECT '+ ERROR.not_found)
        }
        else
            res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

module.exports = router;