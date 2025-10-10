var CatModel  = require("../models/catModel")
const disp = async(req,res)=>{
    console.log('disp called...');
    
    var data = await CatModel.find({})
    return res.json({
        "msg":"Catgeory get successfully...",
        "data":data
    })
}

module.exports = disp