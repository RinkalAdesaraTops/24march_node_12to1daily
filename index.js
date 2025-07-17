// core module - inbuilt module
var http = require('http')
let {add,minus} = require('./calc')
http.createServer((req,res)=>{
    res.write('Hello2637452637')
    add(20,35)
    res.write("Minus is "+minus(45,25))
    res.end()
}).listen(5000,()=>{
    console.log('listening to 5000 port...');  
})