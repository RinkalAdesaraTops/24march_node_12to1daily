var CatModel  = require("../models/catModel")
const disp = async(req,res)=>{
   var data = await CatModel.find({})
    return res.json({
        "msg":"Catgeory get successfully...",
        "data":data
    })
}
const ins = async(req,res)=>{
    let data = await CatModel.insertOne(req.body)
    return res.json({
        "msg":"Successfully inserted..."
    })
}
const upd = async(req,res)=>{
    let id = req.params.id
    let ans = await CatModel.findByIdAndUpdate(id,req.body)
    if(ans){
        return res.json({
            "msg":"Category Updated Successfully."
        })
    }
}
const edit = async(req,res)=>{
    let id = req.params.id
    let data = await CatModel.findById(id)
    return res.json({
        "msg":"Category get successfully.",
        "data":data
    })
}
module.exports = {disp,ins,upd,edit}