const util=require('util');

//Implements logic to get data stored in cache
const getCachedHoldings=async (redisClient)=>{
    const getAsync = util.promisify(redisClient.get).bind(redisClient);
    try{
      let holdings=JSON.parse(await getAsync("holdings"));
      return holdings;
    }
    catch(err){
         console.log(err);
    }
}

module.exports=getCachedHoldings;