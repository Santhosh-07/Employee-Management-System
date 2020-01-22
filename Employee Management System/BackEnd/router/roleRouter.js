const express = require('express');
const router = express.Router();
const insertController = require('../controller/insertController');
const updateController = require('../controller/updateContoller.js');
const searchController = require('../controller/searchController');

router.post('/insert' , async (req,res) => {
    try{
        const us = {
            roleId: req.body.roleId,
            roleName: req.body.roleName,
            comments: req.body.comments
        }
        let response = await insertController.createRole(us);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/update' , async (req,res) => {
    try{
        const us = {
            roleId: req.body.roleId,
            roleName: req.body.roleName,
            comments: req.body.comments
        }
        let response = await updateController.updateRole(us,req.body.roleId);
        res.send(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/search' , async (req,res) => {
    try{
        roleId = req.body.roleId;
        let response = await searchController.searchRole(roleId);
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/fetch' , async (req,res) => {
    try{
        let response = await searchController.fetchRole();
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

router.post('/searchwithdetail' , async (req,res) => {
    try{
        roleId = req.body.roleId;
        let response = await searchController.searchRoleWithDetails(roleId);
        res.json(response);
    }
    catch(errorMessage){
        res.send(errorMessage);
    }
});

module.exports = router;