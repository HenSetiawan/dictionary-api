const browseRouter =require('express').Router();
const browseController=require('../controllers/browseController');

browseRouter.get('/:word',browseController.browseWord);
browseRouter.use('/',browseController.aboutApi)



module.exports=browseRouter;