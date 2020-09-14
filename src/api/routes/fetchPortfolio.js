const express=require('express');
const router=express.Router();
const PortfolioRetriever=require('../../services/getPortfolioService');

//Endpoint for fetching the entire portfolio
router.get('/',async (req,resp)=>{
    try{
       const portfolio=await PortfolioRetriever(req.redisClient);    //makes a call to the service layer
       resp.send(portfolio);
   }
   catch(err){
       resp.status(500).send("Internal Server Error !");
   }
})


module.exports=router;