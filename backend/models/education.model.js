const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    name:String,
    desc:String,
    category:String,
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const Education = mongoose.model('education', educationSchema);

module.exports = Education;