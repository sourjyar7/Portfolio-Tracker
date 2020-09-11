 const tradeValidator=require('../../utils/validators');

 //Middleware for validating a user given trade
 const verifyTrade=async (req,resp,next)=>{
     console.log("validator running");
     try {
        const value = await tradeValidator.validateAsync(req.body);
        console.log("validated")
        next();
     }
    catch (err) {
        resp.status(400).send(err);
     }
     
 }
 
 
 module.exports=verifyTrade;