const express = require('express');
const router = express.Router();
const insertController = require('../controller/insertController');
const updateController = require('../controller/updateContoller.js');
const searchController = require('../controller/searchController');

router.post('/insert' , async (req,res) => {
    try{
        const us = {
            projectStatusId: req.body.projectStatusId,
            status: req.body.status,
            projectId: req.body.projectId,
            teamId: req.body.teamId,
            taskId: req.body.taskId
        }
        let response = await insertController.createProjectStatus(us);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/update' , async (req,res) => {
    try{
        const us = {
            projectStatusId: req.body.projectStatusId,
            status: req.body.status,
            projectId: req.body.projectId,
            teamId: req.body.teamId,
            taskId: req.body.taskId
        }
        let response = await updateController.updateProjectStatus(us,req.body.projectStatusId);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/search' , async (req,res) => {
    try{
        projectStatusId = req.body.projectStatusId;
        let response = await searchController.searchProjectStatus(projectStatusId);
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/fetch' , async (req,res) => {
    try{
        let response = await searchController.fetchProjectStatus();
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

module.exports = router;