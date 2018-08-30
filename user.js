const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let user = new Schema({
    user : {}  

});
module.exports = mongoose.model('User',user);

