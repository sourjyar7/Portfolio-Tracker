const redis=require('redis');

//connects to redis databse and returns a redis client object
const redisConnect=()=>{
try{
const redisClient=redis.createClient({port:process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD
});
console.log("connected to redis");
return redisClient;
}
catch(err){

    console.log(err);
}

}

module.exports=redisConnect;