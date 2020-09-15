//saves returns to cache
const setCachedReturns=(redisClient,returns)=>{
   
    try{
     redisClient.setex("returns",3600,JSON.stringify(returns)); //setting value to cache
    }
    catch(err){
        console.log(err);
    }
 }
 
 module.exports=setCachedReturns;