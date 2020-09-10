const express=require('express');
const router=express.Router();
const verifyTrade=require('../middleware/tradeValidator')

router.get('/',verifyTrade,(req,resp)=>{
    resp.send("fetch portfolio");
})


module.exports=router;