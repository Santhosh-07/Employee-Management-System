const express = require('express');
const router = express.Router();
const insertController = require('../controller/insertController');
const updateController = require('../controller/updateContoller.js');
const searchController = require('../controller/searchController');

router.post('/insert' , async (req,res) => {
    try{
        const us = {
            queryId: req.body.queryId,
            employeeId: req.body.employeeId,
            queryMessage: req.body.queryMessage,
            response: req.body.response,
            queryStatus: req.body.queryStatus
        }
        let response = await insertController.createQuery(us);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/update' , async (req,res) => {
    try{
        const us = {
            queryId: req.body.queryId,
            employeeId: req.body.employeeId,
            queryMessage: req.body.queryMessage,
            response: req.body.response,
            queryStatus: req.body.queryStatus
        }
        let response = await updateController.updateQuery(us,req.body.queryId);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/search' , async (req,res) => {
    try{
        queryId = req.body.queryId;
        let response = await searchController.searchQuery(queryId);
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/fetch' , async (req,res) => {
    try{
        let response = await searchController.fetchQuery();
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

module.exports = router;