var express = require('express')
var router = express.Router()
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    let getExtension = file.originalname.split('.')
    console.log(getExtension);   
    const uniqueSuffix = Date.now() + '.' + getExtension[1]
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const {disp,ins,delData,editData} = require('../controllers/subcatController')
router.get('/',disp)
router.get('/del/:id',delData)
router.get('/edit/:id',editData)
router.post('/add',upload.single('subcatimage'),ins)

module.exports = router