const express=require('express');
const router=express.Router();
const verifyRemoval=require('../middleware/removalValidator');
const TradeRemover = require('../../services/removeTradeService');

router.delete('/',verifyRemoval,async (req,resp)=>{
    const msg=await TradeRemover(req.body.symbol,req.body.tno);
    resp.send({"msg": msg, "removedTradeNo": req.body.tno});
})


module.exports=router;