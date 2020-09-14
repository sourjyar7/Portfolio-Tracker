const getCachedReturns= require('../cache/getCachedReturns');
const setCachedReturns= require('../cache/setCachedReturns');
const HoldingsRetriever=require('./getHoldingsService');

//Implements business logic for calculating returns
const ReturnsRetriever=async (redisClient)=>{
   let cachedReturns=await getCachedReturns(redisClient);  //making call to cache layer for data 
   if(cachedReturns !== null){
     return cachedReturns;
   }
   holdings=await HoldingsRetriever(redisClient);
   if(holdings.length === 0)
      return 0;
   
   //logic for return calculation
   let returns=0;
   holdings.map((ticker,index)=>{
      returns=returns+((100-ticker.avgPrice)*ticker.qty); 
   });
   setCachedReturns(redisClient,returns); 
   return returns;
}

module.exports=ReturnsRetriever;