var express = require('express')
var router = express.Router()
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    let imagename = file.originalname.split(".")
    const uniqueSuffix = Date.now() + "." +imagename[1]
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
const {ins,upd,edit,disp} = require('../controllers/ProductController')

router.get("/",disp)
router.post("/add",upload.single('primage'),ins)
router.put("/upd/:id",upd)
router.patch("/edit/:id",edit)

module.exports = router