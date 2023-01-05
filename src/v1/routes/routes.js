const express = require('express');
const router = express.Router();
const controller= require("../../Controller/Controllers");
const cors = require('cors');


router.get('/symbols', controller.getSymbols);
router.get('/symbols/:id', controller.getSymbol);
router.get('/historical',controller.getHistorical);
router.get('/historical/:id',controller.getOneHistorical);



module.exports = router;




