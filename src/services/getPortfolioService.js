const getPortfolio=require('../db/getPortfolio');
const getCachedPortfolio=require('../cache/getCachedPortfolio');
const setCachedPortfolio=require('../cache/setCachedPortfolio');
const { RedisClient } = require('redis');

//Implements business logic for retrieving portfolio
const PortfolioRetriever=async (redisClient)=>{
   let cachedPortfolio=await getCachedPortfolio(redisClient);//making call to cache layer for data
   let portfolio;
   if(cachedPortfolio == null){
      portfolio=await getPortfolio();//making call to db layer for data
      setCachedPortfolio(redisClient,portfolio);
   }
   else
      portfolio=cachedPortfolio;
  
  return portfolio;
}

module.exports=PortfolioRetriever;