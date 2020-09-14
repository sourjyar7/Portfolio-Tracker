const getHoldings=require('../db/getHoldings');
const getCachedHoldings=require('../cache/getCachedHoldings');
const setCachedHoldings=require('../cache/setCachedHoldings');

//Implements business logic for retrieving holdings
const HoldingsRetriever=async (redisClient)=>{
   
   let cachedHoldings=await getCachedHoldings(redisClient); //making call to cache layer to get cached data
   let holdings;
   if(cachedHoldings == null){
        console.log("not cached"); 
        holdings=await getHoldings();
        setCachedHoldings(redisClient,holdings); //making call to cache layer to set data in cache
      }
   else{
        console.log("cached");
        holdings=cachedHoldings;
      }
   return holdings;
}

module.exports=HoldingsRetriever;