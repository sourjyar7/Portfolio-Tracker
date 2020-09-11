const Holding=require('../db/models');

//Finds and returns the given ticker holding from the database
const getTicker=async (symbol)=>{
    const ticker=await Holding.findOne({'ticker':symbol});
    return ticker;
}

module.exports=getTicker;