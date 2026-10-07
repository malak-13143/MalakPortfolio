const express = require('express');
const router = express.Router();
const Skill = require("../models/skills.model");



router.post('/skills', async(req,res)=>{
    const {name,category} = req.body;
    const mySkill = await Skill.create({name,category});
    res.status(201).json(mySkill)
})

router.get('/skills', async(req,res)=>{
    const mySkill = await Skill.find({isDeleted:false});
    res.json({message: "skill:" ,data:mySkill})
})

router.get('/:id', async(req,res)=>{
    const mySkill = await Skill.findOne({
    _id: req.params.id,
    isDeleted: false
});
    res.json({message: 'skill', data:mySkill})
})

router.put('/:id', async(req,res)=>{
    const {name,category} = req.body;
    const mySkill = await Skill.findOneAndUpdate({_id: req.params.id,isDeleted: false},{name,category},{new:true});
    res.json({message:'skill', mySkill});
})

router.delete('/:id', async(req,res)=>{
    const mySkill = await Skill.findOneAndUpdate({_id:req.params.id,isDeleted: false},{isDeleted:true},{new:true});
    res.json({message: 'delete skill', mySkill});
})

module.exports = router;