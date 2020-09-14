//Implements logic to store data in cache
const setCachedPortfolio=(redisClient,portfolio)=>{
   
    try{
     redisClient.setex("holdings",3600,JSON.stringify(portfolio));
    }
    catch(err){
        console.log(err);
    }
 }
 
 module.exports=setCachedPortfolio;