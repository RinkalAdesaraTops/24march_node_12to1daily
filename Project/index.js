var express = require('express')
var app = express()
var catRoutes = require('./routes/catRoutes')
app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render('home')
})
app.use(express.urlencoded({extended:false}))
app.use('/category',catRoutes)
app.listen(5000,()=>{
    console.log("5000 port running..");   
})