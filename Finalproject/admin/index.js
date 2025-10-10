var express = require('express')
var app = express()
var catRoutes = require('./routes/catRoutes')
app.use(express.json())
app.use('/category/',catRoutes)

app.listen(5000,()=>{
    console.log('listening on 5000 port'); 
})