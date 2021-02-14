const express =require('express');
const app=express();
const browseRouter=require('./src/routers/browseRouter');
require('dotenv').config();


const port=process.env.PORT || 3000;
app.use('/',browseRouter);
app.listen(port,()=>{
    console.log(`server running in port ${port}`)
})