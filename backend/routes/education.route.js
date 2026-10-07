const express = require('express');
const router = express.Router();
const Education = require("../models/education.model");



router.post('/education', async(req,res)=>{
    const {name,desc,category} = req.body;
    const myEducation = await Education.create({name,desc,category});
    res.status(201).json(myEducation)
})

router.get('/education', async(req,res)=>{
    const myEducation = await Education.find({isDeleted:false});
    res.json({message: "education:" ,data:myEducation})
})

router.get('/:id', async(req,res)=>{
    const myEducation = await Education.findOne({
    _id: req.params.id,
    isDeleted: false
});
    res.json({message: 'education', data:myEducation})
})

router.put('/:id', async(req,res)=>{
    const {name,desc,category} = req.body;
    const myEducation = await Education.findOneAndUpdate({_id: req.params.id,isDeleted: false},{name,desc,category},{new:true});
    res.json({message:'education', myEducation});
})

router.delete('/:id', async(req,res)=>{
    const myEducation = await Education.findOneAndUpdate({_id:req.params.id,isDeleted: false},{isDeleted:true},{new:true});
    res.json({message: 'delete education', myEducation});
})

module.exports = router;