const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name:String,
    desc:String,
    technologies:String,
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const Project = mongoose.model('project', projectSchema);

module.exports = Project;