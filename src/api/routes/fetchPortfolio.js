const express=require('express');
const router=express.Router();
const PortfolioRetriever=require('../../services/getPortfolioService');

//Endpoint for fetching the entire portfolio
router.get('/',async (req,resp)=>{
    const portfolio=await PortfolioRetriever();    //makes a call to the service layer
    
    resp.send(portfolio);
})


module.exports=router;