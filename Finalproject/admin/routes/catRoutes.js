var {disp,ins,upd,edit}  = require('../controllers/CatController')
var express = require('express')
var router = express.Router()
router.get("/",disp)
router.post("/add",ins)
router.put("/upd/:id",upd)
router.patch("/edit/:id",edit)

module.exports = router