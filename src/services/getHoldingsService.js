const getHoldings=require('../db/getHoldings');

//Implements business logic for retrieving holdings
const HoldingsRetriever=async ()=>{
   const holdings=await getHoldings();
   return holdings;
}

module.exports=HoldingsRetriever;