const express= require('express')
const { addListener } = require('../models/student')
const student = require('../models/student')
const router =express.Router()
const Student=require('../models/student')

router.get('/',async(req,res)=>{
    try{
            const students=await Student.find()
            res.json(students)
    }catch(err){
        res.send('Error '+err)
    }   
})

router.get('/:id',async(req,res)=>{
    try{
            const student=await Student.findById(req.params.id)
            res.json(student)
    }catch(err){
        res.send('Error '+err)
    }   
})


router.post('/', async(req,res)=>{
    const student=new Student({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try{
       const s1= await student.save()
       res.json(s1)
    }catch(err){
       res.send('Error '+err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const student= await Student.findById(req.params.id)
        student.sub=req.body.sub
        const s1=await student.save()
        res.json(s1)
    }catch(err){
        res.send('Error ' +err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const student= await Student.findById(req.params.id)
        student.sub=req.body.sub
        const s1=await student.remove()
        res.json(s1)
    }catch(err){
        res.send('Error ' +err)
    }
})

module.exports=router