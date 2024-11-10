const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
const schema=require('../models/schema');

router.use(bodyParser.urlencoded({
    extended:true 
}));
router.use(bodyParser.json());


router.post('/travel',async(req,res)=>{
    
    const Travel=new schema({
        Destination: req.body.Destination,
        Date:req.body.Date,
        Highlights:req.body.Highlights,
        ImgUrl:req.body.ImgUrl
    });
    try{
        const newTravel=await Travel.save();
        res.status(201).json(newTravel);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
});

router.get('/travel',async(req,res)=>{
    try{
        const newTravel=await schema.find().sort({date:-1});
        res.json(newTravel); 
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
});

router.put('/travel/:id',async(req,res)=>{
    try{
        const updatedTravel=await schema.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedTravel);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/travel/:id',async(req,res)=>{
    try{
        await schema.findByIdAndDelete(req.params.id);
        res.json({message:'Journal deleted'});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

module.exports = router;
