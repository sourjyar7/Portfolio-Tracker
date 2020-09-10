const express=require('express');
const router=express.Router();
const verifyTrade=require('../middleware/tradeValidator')

router.delete('/',verifyTrade,(req,resp)=>{
    resp.send("remove trade");
})


module.exports=router;