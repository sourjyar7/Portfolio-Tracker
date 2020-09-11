const express=require('express');
const router=express.Router();
const HoldingsRetriever=require('../../services/getHoldingsService');

//Endpoint for fetching the holdings
router.get('/',async (req,resp)=>{
    const holdings=await HoldingsRetriever();    //makes a call to the service layer
    
    resp.send(holdings);
})


module.exports=router;