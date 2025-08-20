const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/24marchmernstack')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const subcatSchema = new Schema({
  catid: {   
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category' // 'User' is the name of the Mongoose model       
  },
  subcatname:String
});
const catModel = mongoose.model('subcategory', subcatSchema);
module.exports = catModel