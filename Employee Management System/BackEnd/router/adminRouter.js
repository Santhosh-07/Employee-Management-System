const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');
var searchController = require('../controller/searchController')

router.post('/insert', async (req, res) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash("Admin@123", salt);
    const adminId = "Administrator";
    const loginInfo = {
        adminId: adminId,
        password: hashedPassword
    };
    try{
        admin.create(loginInfo);
        res.send(SUCCESS.success)
    }
    catch(errorMessage){
        res.send(ERROR.failure)
    }
});

router.post('/login', async (req, res) => {
    const loginInfo = {
        adminId: req.body.adminId,
        password: req.body.password,
        role: 1
    };
    const adminList = await searchController.searchAdmin(req.body.adminId);
    try {
        if(await bcrypt.compare(req.body.password, adminList[0].password)) {
            res.send({
                password: adminList[0].password,
                role: loginInfo.role
            });
        } 
        else {
            res.send(ERROR.password_incorrect);
        }
    } catch {
        res.status(500).send(ERROR.password_incorrect)
    }
});

module.exports = router;