var express = require('express')
var cors = require('cors')
var app = express()
var catRoutes = require('./routes/catRoutes')
app.use(express.json())
app.use(cors());
app.use('/category/',catRoutes)

app.listen(5000,()=>{
    console.log('listening on 5000 port'); 
})