const redis=require('redis');

const redisConnect=()=>{


const redisClient=redis.createClient(process.env.REDIS_PORT);
console.log("connected to redis");
return redisClient;

}

module.exports=redisConnect;