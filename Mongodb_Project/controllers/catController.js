const { ObjectId } = require('mongodb')
const main = require('../models/catModel')
const disp = async(req,res)=>{
    let connection = await main()
    let db = connection.db
    let collection = db.collection('category') 
    let alldata = await collection.find().toArray()
    res.render('category',{
        "alldata":alldata,
        "editcat":''
    })
}
const ins = async(req,res)=>{
    console.log(req.body);    
    let connection = await main()
    let db = connection.db
    let collection = db.collection('category') 
    let id =''
    if(req.body.catid!=''){
        id = new ObjectId(req.body.catid)
    }
    let res1
    if(id!=''){
        res1 = await collection.updateOne({_id:id},{$set:req.body})
    } else {
       res1 = await collection.insertOne(req.body)
    }
    if(res1){
        res.redirect('/category/')
    }
}
const delData = async(req,res)=>{
    let id = req.params.id
    let connection = await main()
    let db = connection.db
    let collection = db.collection('category') 
    let objId = new ObjectId(id)
    let result = await collection.deleteOne({_id:objId})
    if(result){
        res.redirect('/category/')
    }
}
const editData = async(req,res)=>{
    let id = req.params.id
    let connection = await main()
    let db = connection.db
    let collection = db.collection('category') 
    let objId = new ObjectId(id)
    let result = await collection.findOne({_id:objId})
    let alldata = await collection.find().toArray()
    res.render('category',{
        "alldata":alldata,
        "editcat":result
    })
}
module.exports = {ins,disp,delData,editData}