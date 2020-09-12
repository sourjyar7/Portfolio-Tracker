const Joi = require('joi');

//Creating a validation schema for a removal operation
const removalSchema = Joi.object({
    symbol: Joi.string()
        .alphanum()
        .required(),
    
    tno: Joi.number()
         .integer()
         .required()    
    
})
    
module.exports=removalSchema;