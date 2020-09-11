const Joi = require('joi');

//Creating a validation schema for a trade 
const changeSchema = Joi.object({
    symbol: Joi.string()
        .alphanum()
        .required(),
    
    tno: Joi.number()
         .integer()
         .required(),    

    type: Joi.string()
        .valid('Buy','Sell')
        .required(),

    qty: Joi.number()
         .integer()
         .required(),
    

    price: Joi.number()
        .integer()
        .required()
    
})
    
module.exports=changeSchema;