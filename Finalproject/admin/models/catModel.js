const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/24marchmernstack')
  .then(() => console.log('Connected!'));
    const Schema = mongoose.Schema;
    const catSchema = new Schema({
    catname: String
    });
const CatModel = mongoose.model('category', catSchema);
module.exports = CatModel