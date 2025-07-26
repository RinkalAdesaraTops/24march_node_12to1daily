var express = require('express')
var router = express.Router()
var {disp,ins,delData} = require('../controllers/catController')
router.get('/',disp)
router.post('/add',ins)
router.get('/del/:id',delData)

module.exports = router