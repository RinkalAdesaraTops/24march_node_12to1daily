var express = require('express')
var router = express.Router()
const addRegister= require('../controllers/Usercontroller')
router.post('/register',addRegister)

module.exports = router