 const tradeValidatorSchema=require('../../utils/tradeValidatorSchema');

 //Middleware for validating a user given trade
 const verifyTrade=async (req,resp,next)=>{
     
     try {
        const value = await tradeValidatorSchema.validateAsync(req.body);
        next();
     }
    catch (err) {
        resp.status(400).send(err);
     }
     
 }
 
 
 module.exports=verifyTrade;