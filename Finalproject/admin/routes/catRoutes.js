var disp  = require('../controllers/CatController')
var express = require('express')
var router = express.Router()
router.get("/",disp)

module.exports = router