const changeValidatorSchema=require('../../utils/changeValidatorSchema');

//Middleware for validating a user given trade
const verifyChange=async (req,resp,next)=>{
    
    try {
       const value = await changeValidatorSchema.validateAsync(req.body);
       next();
    }
   catch (err) {
       resp.status(400).send(err);
    }
    
}


module.exports=verifyChange;