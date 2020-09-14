const util=require('util');

//Implements logic to get data stored in cache
const getCachedPortfolio=async (redisClient)=>{
    const getAsync = util.promisify(redisClient.get).bind(redisClient);
    try{
      let portfolio=JSON.parse(await getAsync("portfolio"));
      return portfolio;
    }
    catch(err){
         console.log(err);
    }
}

module.exports=getCachedPortfolio;