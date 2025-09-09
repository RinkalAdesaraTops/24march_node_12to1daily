var express = require('express')
var router = express.Router()
const {addRegister,login}= require('../controllers/Usercontroller')
router.post('/register',addRegister)
router.post('/login',login)

module.exports = router