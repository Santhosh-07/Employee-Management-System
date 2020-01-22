const express = require('express');
const router = express.Router();
const insertController = require('../controller/insertController');
const searchController = require('../controller/searchController');

router.post('/insert' , async (req,res) => {
    try{
        const us = {
            id: req.body.id,
            teamId: req.body.teamId,
            projectId: req.body.projectId,
            employeeId: req.body.employeeId
        }
        let response = await insertController.createTeam(us);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/search' , async (req,res) => {
    try{
        teamId = req.body.teamId;
        let response = await searchController.searchTeam(teamId);
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/fetch' , async (req,res) => {
    try{
        let response = await searchController.fetchTeam();
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

module.exports = router;