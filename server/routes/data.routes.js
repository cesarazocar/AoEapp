const express = require('express');
const api = express.Router();
const dataController = require('../controllers/data.controller')


api.get('/getUnits', dataController.getUnits);
api.get('/getCivs', dataController.getCivs);
api.post('/post/', dataController.post);



module.exports = api;