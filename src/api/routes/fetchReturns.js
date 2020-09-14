const express=require('express');
const ReturnsRetriever = require('../../services/getReturnsService');
const router=express.Router();

//Endpoint for fetching returns
router.get('/',async (req,resp)=>{
    try{
        const returns=await ReturnsRetriever(req.redisClient);  //making call to service layer
        resp.send({"returns":returns});
    }
    catch(err){
        resp.status(500).send("Internal Server Error !");
    }
})


module.exports=router;