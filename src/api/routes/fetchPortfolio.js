const express=require('express');
const router=express.Router();
const getPortfolio=require('../../services/getPortfolioService');

//Endpoint for fetching the entire portfolio
router.get('/',async (req,resp)=>{
    const portfolio=await getPortfolio();    //makes a call to the service layer
    
    resp.send(portfolio);
})


module.exports=router;