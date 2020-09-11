const Holding=require('../db/models');

//Retrieves and returns entire collection of holdings from database
const getHoldings=async ()=>{
    const holdings=await Holding.find({},{ticker:1,avgPrice:1,qty:1});
    return holdings;
}

module.exports=getHoldings;