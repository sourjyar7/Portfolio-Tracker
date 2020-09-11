const express=require('express');
const router=express.Router();
const verifyChange=require('../middleware/changeValidator');
const TradeUpdater = require('../../services/updateTradeService');

router.post('/',verifyChange,async (req,resp)=>{
    let changes={
        "type": req.body.type,
        "qty": req.body.qty,
        "price": req.body.price
    }
    const msg=await TradeUpdater(req.body.symbol,req.body.tno,changes);
    resp.send({"msg":msg, "changes": changes});
})


module.exports=router;