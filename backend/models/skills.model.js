const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name:String,
    category:String,
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const Skill = mongoose.model('skill', skillSchema);

module.exports = Skill;

