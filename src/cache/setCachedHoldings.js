
//Implements logic to store data in cache
const setCachedHoldings=(redisClient,holdings)=>{
   
   try{
    redisClient.setex("holdings",3600,JSON.stringify(holdings));
   }
   catch(err){
       console.log(err);
   }
}

module.exports=setCachedHoldings;