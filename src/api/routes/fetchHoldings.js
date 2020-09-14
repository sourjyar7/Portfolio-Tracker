const express=require('express');
const router=express.Router();
const HoldingsRetriever=require('../../services/getHoldingsService');

//Endpoint for fetching the holdings
router.get('/',async (req,resp)=>{
   
    try{
      
      const holdings=await HoldingsRetriever(req.redisClient);    //makes a call to the service layer
      resp.send(holdings);
    }
    catch(err){
      console.log(err)
      resp.status(500).send("Internal Server Error !");  
    }
});


module.exports=router;