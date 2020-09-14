const redisConfig=(redisClient)=>{
    
    return (req,resp,next)=>{
       req.redisClient=redisClient;
       next();
    }
}

module.exports=redisConfig;