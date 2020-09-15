const util=require('util');

//Implements logic to get data stored in cache
const getCachedReturns=async (redisClient)=>{
    const getAsync = util.promisify(redisClient.get).bind(redisClient);  //promisifying the redis get method
    try{
      let returns=JSON.parse(await getAsync("returns"));
      return returns;
    }
    catch(err){
         console.log(err);
    }
}

module.exports=getCachedReturns;