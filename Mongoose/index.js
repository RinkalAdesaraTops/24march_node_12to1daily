var express = require('express')
var app = express()
var jwt = require('jsonwebtoken');

var secretKey = "test@123"
var catRoutes = require('./routes/catRoutes')
var subcatRoutes = require('./routes/subcatRoutes')
var userRoutes = require('./routes/userRoutes')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
const verifyToken = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization != '') {
        let dt = req.headers.authorization.split(' ')
        jwt.verify(dt[1],secretKey, function (err, decoded) {
            if(err){
                return res.json({
                    "msg":"Invalid Token..."
                })
            } else {
                next()
            }
        });
    } else {
        return res.json({
            "msg": "Plz enter token"
        })
    }

    // next()

}
app.use('/category/', verifyToken, catRoutes)
app.use('/subcategory/', subcatRoutes)
app.use('/user/', userRoutes)
app.get('/', (req, res) => {
    res.render('home')
})
app.listen(5000, () => {
    console.log("5000 port running");
})