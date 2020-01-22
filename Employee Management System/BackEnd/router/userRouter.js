const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');

const searchController = require('../controller/searchController.js');

router.post('/login', async (req, res) => {
    const loginInfo = {
        userName: req.body.userName,
        password: req.body.password
    };
    const userList = await searchController.searchUser(req.body.userName);
    try {
        if (!userList) {
            return res.status(400).send({
                response: 'Cannot find user'
            });
        }
        if(await bcrypt.compare(req.body.password, userList[0].password)) {
            res.send({
                password: userList[0].password,
                role: userList[0].roleId
            });
        } 
        else {
            res.send({
                response: 'Not Allowed'
            });
        }
    } catch {
        res.status(500).send()
    }
});

router.post('/');
  

module.exports = router;