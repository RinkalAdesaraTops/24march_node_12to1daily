const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/24marchmernstack')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const userSchema = new Schema({
 username: String,
 age:String,
 email:String,
 password:String
});
const userModel = mongoose.model('user', userSchema);
module.exports = userModel