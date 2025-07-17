var express = require('express')
var app = express()
app.get('/',(req,res)=>{
    res.send("<a href='/home'>Home</a> || <a href='/about'>About</a>")
})
app.get('/home',(req,res)=>{
    console.log(__dirname);
    
    res.sendFile(__dirname+'/index.html')
})
app.get('/about',(req,res)=>{
    console.log(__dirname);
    
    res.sendFile(__dirname+'/about.html')
})

app.listen(5000,()=>{
    console.log('5000 port running..');
    
})