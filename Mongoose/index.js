var express = require('express')
var app = express()
var catRoutes = require('./routes/catRoutes')
var subcatRoutes = require('./routes/subcatRoutes')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

app.use('/category/',catRoutes)
app.use('/subcategory/',subcatRoutes)
app.get('/',(req,res)=>{
    res.render('home')
})
app.listen(5000,()=>{
    console.log("5000 port running");
})