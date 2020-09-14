const setCachedReturns=(redisClient,returns)=>{
   
    try{
     redisClient.setex("returns",3600,JSON.stringify(returns));
    }
    catch(err){
        console.log(err);
    }
 }
 
 module.exports=setCachedReturns;