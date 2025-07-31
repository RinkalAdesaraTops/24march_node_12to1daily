const subcatModel = require('../models/subcatModel')
const disp = async(req,res)=>{
    let data = await subcatModel.find({})
    res.render("subcategory",{
        "alldata":data,
        "editcat":''
    })
}
const ins = async(req,res)=>{
    let id = req.body.catid
    let result
    if(id!=''){
        result = await subcatModel.findByIdAndUpdate(id,req.body)
    } else {
        result = await subcatModel.insertOne(req.body)
    }
    if(result){
        res.redirect('/subcategory/')
    }
}
const delData = async(req,res)=>{
    let id = req.params.id
    let result = await subcatModel.findByIdAndDelete(id)
    if(result){
        res.redirect('/subcategory/')
    }
}
const editData = async(req,res)=>{
    let id = req.params.id
    let result = await subcatModel.findById(id)
    let data = await subcatModel.find({})
    res.render("subcategory",{
        "alldata":data,
        "editcat":result
    })
}
module.exports = {ins,disp,delData,editData}
