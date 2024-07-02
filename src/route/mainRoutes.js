const express = require('express');
const router = express.Router();
const controladores = require('../controllers/mainControllers');
// const multer = require ('multer');
// const path = require('path');

// multer aqui


// set de controladores aqui
router.get("/shop", controladores.getProduct);

module.exports = router;