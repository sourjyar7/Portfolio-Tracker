const Holding=require('../db/models');

//Finds and returns the given ticker holding from the database
const getTicker=async (trade)=>{
    const ticker=await Holding.findOne({'ticker':trade.ticker});
    return ticker;
}

module.exports=getTicker;