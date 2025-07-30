const catModel = require('../models/catModel')
const disp = async(req,res)=>{
    let data = await catModel.find({})
    res.render("category",{
        "alldata":data,
        "editcat":''
    })
}
const ins = async(req,res)=>{
    let id = req.body.catid
    let result
    if(id!=''){
        result = await catModel.findByIdAndUpdate(id,req.body)
    } else {
        result = await catModel.insertOne(req.body)
    }
    if(result){
        res.redirect('/category/')
    }
}
const delData = async(req,res)=>{
    let id = req.params.id
    let result = await catModel.findByIdAndDelete(id)
    if(result){
        res.redirect('/category/')
    }
}
const editData = async(req,res)=>{
    let id = req.params.id
    let result = await catModel.findById(id)
    let data = await catModel.find({})
    res.render("category",{
        "alldata":data,
        "editcat":result
    })
}
module.exports = {ins,disp,delData,editData}
