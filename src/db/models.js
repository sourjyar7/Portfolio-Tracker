const mongoose=require('mongoose');

//Creating Trade Schema
const tradeSchema=mongoose.Schema({
    ticker:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: ['Buy','Sell'],
        required: true
      },
    qty:{
        type: Number,
        required: true
    },
    price:{
        type: mongoose.Decimal128,
        required: true
    },
    prevAvg:{
        type: mongoose.Decimal128,
        required: true,
        default:0.0
    },
    prevQty:{
        type: Number,
        required: true,
        default:0
    }
})

//Creating Holdings Schema
const holdingSchema=mongoose.Schema({
    ticker:{
        type: String,
        required: true,
        unique: true,
        index: true    //creating index on ticker field
    },
    avgPrice:{
        type: mongoose.Decimal128,
        required: true
    },
    qty:{
        type: Number,
        required: true
        
    },
    trades:{
        type: [tradeSchema],
        required: true
    }
});

module.exports=mongoose.model('Holdings',holdingSchema);