const express =require('express');
const { use } = require('./src/routers/browseRouter');
const app=express();
const browseRouter=require('./src/routers/browseRouter');

app.use('/',browseRouter);
app.listen(3000,()=>{
    console.log('server running in port 3000')
})