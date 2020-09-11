const Joi = require('joi');
//Creating a validation schema for a trade 
const tradeSchema = Joi.object({
    ticker: Joi.string()
        .alphanum()
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
    
module.exports=tradeSchema;