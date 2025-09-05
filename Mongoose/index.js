var express = require('express')
var app = express()
var catRoutes = require('./routes/catRoutes')
var subcatRoutes = require('./routes/subcatRoutes')
var userRoutes = require('./routes/userRoutes')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use('/category/',catRoutes)
app.use('/subcategory/',subcatRoutes)
app.use('/user/',userRoutes)
app.get('/',(req,res)=>{
    res.render('home')
})
app.listen(5000,()=>{
    console.log("5000 port running");
})