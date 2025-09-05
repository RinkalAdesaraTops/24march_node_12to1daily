const userModel = require('../models/userModel')

const addRegister =async (req,res)=>{
        let result
        result = await userModel.insertOne(req.body)
    
    if (result) {
        return res.json({
            "msg": "Data inserted..."
        })
    }
}

module.exports = addRegister