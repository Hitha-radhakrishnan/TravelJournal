const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const path=require('path');
require('dotenv').config();

mongoose.connect(process.env.DB_URI,{
    // useNewUrlParser:true, // use the new URL parser
    // useUnifiedTopology:true // Use the new server discovery and monitoring engine
});
app.use(cors());
app.use(express.static(path.join(__dirname,'public'))); 

app.set("view engine");
app.set("views",path.join(__dirname,"views"));
  
//Import and use the blog route
const TravelRouter=require('./routes/routes');
app.use('/api',TravelRouter);


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});

const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});