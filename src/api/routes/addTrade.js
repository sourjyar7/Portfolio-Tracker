const express=require('express');
const router=express.Router();
const verifyTrade=require('../middleware/tradeValidator');
const TradeAdder=require('../../services/addTradeService');

router.post('/',verifyTrade,async (req,resp)=>{
    let response={};
    const msg=await TradeAdder(req.body);
    
    if(typeof(msg) === 'string')
      resp.status(200).send({"msg":msg,"error":false});
    else
      resp.status(500).send("Internal Server Error !");
    
    
    
    
})


module.exports=router;