const Holding=require('../db/models');

//Saves the given holding to database
const saveHolding=async (ticker)=>{
    try{
        const holding=new Holding(ticker);
        await holding.save();
        return "success"    
    }
    catch(err){
        return "failure";
    }
}
module.exports=saveHolding;