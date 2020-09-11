const Holding=require('../db/models');

//Saves the given holding to database
const saveHolding=async (ticker)=>{
    const holding=new Holding(ticker);
    await holding.save();
    return "success";
}

module.exports=saveHolding;