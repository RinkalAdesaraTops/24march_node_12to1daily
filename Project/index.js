var express = require('express')
var app = express()
app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/category',(req,res)=>{
    res.render('category')
})
app.listen(5000,()=>{
    console.log("5000 port running..");   
})