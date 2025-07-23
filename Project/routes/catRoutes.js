var express = require('express')
var router = express.Router()
var {disp,ins} = require('../controllers/catController')
router.get('/',disp)
router.post('/add',ins)

module.exports = router