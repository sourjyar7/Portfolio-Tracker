const Holding=require('../db/models');

//deletes the given ticker from database 
const deleteTicker=async (ticker)=>{
   try{
    await Holding.deleteOne({ticker: ticker.ticker});
   }
   catch(err){
     console.log(err);
    }
}

module.exports=deleteTicker;