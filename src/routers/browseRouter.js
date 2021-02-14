const browseRouter =require('express').Router();
const browseController=require('../controllers/browseController');

browseRouter.get('/:word',browseController.browseWord);



module.exports=browseRouter;