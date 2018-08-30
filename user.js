const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let user = new Schema({
    User_Id : {type : String},
    UserName: {type : String},
    Name: {type : String},
    email: {type : String},
    gender: {type : String},
    _:     {type : String},
    DOB:   {type : String},
    Age:   {type : String},
    Interest_In_Age : {type : String},
    Title:   {type : String},
    Description: {type : String},
    Country: {type : String},
    State: {type : String},
    City: {type : String},
    PinCode: {type : String},
    Relationship_Status: {type : String},
    Looking_for: {type : String},
    Profession: {type : String},
    Language: {type : String},
    Religion: {type : String},
    Height: {type : String},
    Body_Type: {type : String}

});
module.exports = mongoose.model('User',user);