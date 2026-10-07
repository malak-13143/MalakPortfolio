const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name:String,
    desc:String,
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const Service = mongoose.model('service', serviceSchema);

module.exports = Service;