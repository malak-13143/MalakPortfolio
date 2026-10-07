const express = require('express');
const router = express.Router();
const Service = require("../models/service.model");



router.post('/service', async(req,res)=>{
    const {name,desc} = req.body;
    const myService = await Service.create({name,desc});
    res.status(201).json(myService)
})

router.get('/service', async(req,res)=>{
    const myService = await Service.find({isDeleted:false});
    res.json({message: "service:" ,data:myService})
})

router.get('/:id', async(req,res)=>{
    const myService = await Service.findOne({
    _id: req.params.id,
    isDeleted: false
});
    res.json({message: 'service', data:myService})
})

router.put('/:id', async(req,res)=>{
    const {name,desc} = req.body;
    const myService = await Service.findOneAndUpdate({_id: req.params.id,isDeleted: false},{name,desc},{new:true});
    res.json({message:'service', myService});
})

router.delete('/:id', async(req,res)=>{
    const myService = await Service.findOneAndUpdate({_id:req.params.id,isDeleted: false},{isDeleted:true},{new:true});
    res.json({message: 'delete service', myService});
})

module.exports = router;