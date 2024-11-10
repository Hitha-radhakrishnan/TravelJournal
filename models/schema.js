const mongoose=require('mongoose');

const TravelSchema=new mongoose.Schema({
    Destination:{type:String,required:true},
    Date:{type:Date,required:true},
    Highlights:{type:String,required:true},
    ImgUrl:{type:String,required:true}
});

module.exports=mongoose.model('schema',TravelSchema);