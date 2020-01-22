const express = require('express');
const router = express.Router();
const insertController = require('../controller/insertController');
const updateController = require('../controller/updateContoller.js');
const searchController = require('../controller/searchController');

router.post('/insert' , async (req,res) => {
    try{
        const us = {
            taskId: req.body.taskId,
            task: req.body.task,
            difficultyId: req.body.difficultyId,
            employeeId: req.body.employeeId,
            comments: req.body.comments,
            projectStatusId: req.body.projectStatusId
        }
        let response = await insertController.createTask(us);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/update' , async (req,res) => {
    try{
        const us = {
            taskId: req.body.taskId,
            task: req.body.task,
            difficultyId: req.body.difficultyId,
            employeeId: req.body.employeeId,
            comments: req.body.comments,
            projectStatusId: req.body.projectStatusId
        }
        let response = await updateController.updateTask(us,req.body.taskId);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/search' , async (req,res) => {
    try{
        taskId = req.body.taskId;
        let response = await searchController.searchTask(taskId);
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/fetch' , async (req,res) => {
    try{
        taskId = req.body.taskId;
        let response = await searchController.fetchTask(taskId);
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

module.exports = router;