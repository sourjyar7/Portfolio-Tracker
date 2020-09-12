const removalValidatorSchema=require('../../utils/removalValidatorSchema');

 //Middleware for validating a user given removal
 const verifyRemoval=async (req,resp,next)=>{
     
     try {
        const value = await removalValidatorSchema.validateAsync(req.body);
        next();
     }
    catch (err) {
        resp.status(400).send(err);
     }
     
 }
 
 
 module.exports=verifyRemoval;