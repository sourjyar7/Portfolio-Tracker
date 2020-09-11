const express=require('express');
const router=express.Router();
const verifyTrade=require('../middleware/tradeValidator');
const TradeAdder=require('../../services/addTradeService');

//Endpoint for adding a trade
router.post('/',verifyTrade,async (req,resp)=>{
    
    const msg=await TradeAdder(req.body); //Makes a call to the service layer
    
    if(typeof(msg) === 'string')
      resp.status(200).send({"original":req.body,"msg":msg,"error":false});
    else
      resp.status(500).send("Internal Server Error !");
    
 })


module.exports=router;