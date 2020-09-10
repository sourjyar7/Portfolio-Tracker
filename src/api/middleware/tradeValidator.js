 const verifyTrade=(req,resp,next)=>{
     console.log("validator running");
     console.log(req.url)
     next();
 }
 module.exports=verifyTrade;