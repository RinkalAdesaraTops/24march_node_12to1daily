var express = require('express')
var router = express.Router()
const {disp,ins,delData,editData} = require('../controllers/catController')
router.get('/',disp)
router.get('/del/:id',delData)
router.get('/edit/:id',editData)
router.post('/add',ins)

module.exports = router