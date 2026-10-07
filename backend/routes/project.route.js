const express = require('express');
const router = express.Router();
const Project = require("../models/projects.model");



router.post('/projects', async(req,res)=>{
    const {name,desc,technologies} = req.body;
    const myProject = await Project.create({name,desc,technologies});
    res.status(201).json(myProject)
})

router.get('/projects', async(req,res)=>{
    const myProject = await Project.find({isDeleted:false});
    res.json({message: "project:" ,data:myProject})
})

router.get('/:id', async(req,res)=>{
    const myProject = await Project.findOne({
    _id: req.params.id,
    isDeleted: false
});
    res.json({message: 'project', data:myProject})
})

router.put('/:id', async(req,res)=>{
    const {name,desc,technologies} = req.body;
    const myProject = await Project.findOneAndUpdate({_id: req.params.id,isDeleted: false},{name,desc,technologies},{new:true});
    res.json({message:'project', myProject});
})

router.delete('/:id', async(req,res)=>{
    const myProject = await Project.findOneAndUpdate({_id:req.params.id,isDeleted: false},{isDeleted:true},{new:true});
    res.json({message: 'delete project', myProject});
})

module.exports = router;