const express=require('express');
const router=express.Router();
const verifyRemoval=require('../middleware/removalValidator');
const TradeRemover = require('../../services/removeTradeService');

router.delete('/',verifyRemoval,async (req,resp)=>{
   try{
       const msg=await TradeRemover(req.body.symbol,req.body.tno,req.redisClient);
       resp.send({"msg": msg, "removedTradeNo": req.body.tno});
   }
   catch(err){
       resp.status(500).send("Internal Server Error !");
   }
})


module.exports=router;