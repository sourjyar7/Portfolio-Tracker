const flushCache=(redisClient)=>{
   try{
    redisClient.flushdb( function (err, succeeded) {
        console.log("Cache flushed"); // will be true if successfull
    });
   }
   catch(err){
       console.log(err);
   }   
}

module.exports=flushCache;