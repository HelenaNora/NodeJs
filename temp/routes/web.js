const express = require('express');
const userController = require('../controllers/user');
const route = express.Router();
route.get('/user', userController.sayUser);
 
route.get('/', userController.sayExpress);

module.exports = route;