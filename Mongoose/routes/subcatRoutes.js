var express = require('express')
var router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const {disp,ins,delData,editData} = require('../controllers/subcatController')
router.get('/',disp)
router.get('/del/:id',delData)
router.get('/edit/:id',editData)
router.post('/add',upload.single('subcatimage'),ins)

module.exports = router