const express=require('express');
const router=express.Router();
const verifyTrade=require('../middleware/tradeValidator')

router.post('/',verifyTrade,(req,resp)=>{
    resp.send("update trade");
})


module.exports=router;