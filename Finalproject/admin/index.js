var express = require('express')
var cors = require('cors')
var app = express()
var catRoutes = require('./routes/catRoutes')
var prRoutes = require('./routes/prRoutes')
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/category/',catRoutes)
app.use('/product/',prRoutes)

app.listen(5000,()=>{
    console.log('listening on 5000 port'); 
})