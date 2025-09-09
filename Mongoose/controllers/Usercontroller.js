const userModel = require('../models/userModel')
var jwt = require('jsonwebtoken');
var secretKey = "test@123"
const addRegister = async (req, res) => {
    let result
    result = await userModel.insertOne(req.body)
    if (result) {
        return res.json({
            "msg": "User registered successfully..."
        })
    }
}
const login = async (req, res) => {
    let result = await userModel.find({
        email: req.body.email
    })
    if (result.length > 0) {
        let data = result[0];
        if (data.password == req.body.password) {
            //generate token
            var token = jwt.sign({email:data.email}, secretKey);
            return res.json({
                "msg": "Logged in successfully..",
                "token":token
            })
        } else {
            return res.json({
                "msg": "Password is wrong..."
            })
        }
    } else {
        return res.json({
            "msg": "You are not registered user.."
        })
    }

}
module.exports = { addRegister, login }