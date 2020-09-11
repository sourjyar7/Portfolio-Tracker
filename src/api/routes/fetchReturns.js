const express=require('express');
const ReturnsRetriever = require('../../services/getReturnsService');
const router=express.Router();

//Endpoint for fetching returns
router.get('/',async (req,resp)=>{
    const returns=await ReturnsRetriever();  //making call to service layer
    resp.send({"returns":returns});
})


module.exports=router;