const mongoose= require('mongoose');
const { describe } = require('node:test');
const brandSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:String
});
module.exports=mongoose.model('Brand',brandSchema);