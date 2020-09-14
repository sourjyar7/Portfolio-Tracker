const redis=require('redis');

const redisConnect=()=>{


const redisClient=redis.createClient({port:process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD
});
console.log("connected to redis");
return redisClient;

}

module.exports=redisConnect;