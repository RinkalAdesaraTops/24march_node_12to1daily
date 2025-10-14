var PrModel = require("../models/prModel")

const disp = async (req, res) => {
    var data = await PrModel.find({}).populate("catid")
    return res.json({
        "msg": "Product get successfully...",
        "data": data
    })
}
const ins = async (req, res) => {
    req.body.primage = req.file.filename
    let data = await PrModel.insertOne(req.body)
    if (data) {
        return res.json({
            "msg": "Successfully inserted..."
        })
    }

}
const upd = async (req, res) => {
    let id = req.params.id
    let ans = await PrModel.findByIdAndUpdate(id, req.body)
    if (ans) {
        return res.json({
            "msg": "Product Updated Successfully."
        })
    }
}
const edit = async (req, res) => {
    let id = req.params.id
    let data = await PrModel.findById(id)
    return res.json({
        "msg": "Product get successfully.",
        "data": data
    })
}
module.exports = { disp, ins, upd, edit }