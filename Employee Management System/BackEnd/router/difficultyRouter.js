const express = require('express');
const router = express.Router();
const insertController = require('../controller/insertController');
const updateController = require('../controller/updateContoller.js');
const searchController = require('../controller/searchController');

router.post('/insert' , async (req,res) => {
    try{
        const difficultyInfo = {
            difficultyId: req.body.difficultyId,
            difficultyLevel: req.body.difficultyLevel
        }
        let response = await insertController.createDifficulty(difficultyInfo);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/update' , async (req,res) => {
    try{
        const difficultyInfo = {
            difficultyId: req.body.difficultyId,
            difficultyLevel: req.body.difficultyLevel
        }
        let response = await updateController.updateDifficulty(us,req.body.difficultyId);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/fetch' , async (req,res) => {
    try{
        difficultyId = req.body.difficultyId;
        let response = await searchController.fetchDifficulty();
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/search' , async (req,res) => {
    try{
        difficultyId = req.body.difficultyId;
        let response = await searchController.searchDifficulty(difficultyId);
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

module.exports = router;