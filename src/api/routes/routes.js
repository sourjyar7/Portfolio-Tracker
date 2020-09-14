const addTrade=require('./addTrade');
const removeTrade=require('./removeTrade');
const updateTrade=require('./updateTrade');
const fetchHoldings=require('./fetchHoldings');
const fetchPortfolio=require('./fetchPortfolio');
const fetchReturns=require('./fetchReturns');
const redisConfig=require('../middleware/redisConfig');

//Initialises all the routes using express app object
module.exports=function(app,redisClient){
  
   app.use('/Portfolio_Tracker/addTrade',redisConfig(redisClient),addTrade);
   app.use('/Portfolio_Tracker/removeTrade',redisConfig(redisClient),removeTrade);
   app.use('/Portfolio_Tracker/updateTrade',redisConfig(redisClient),updateTrade);
   app.use('/Portfolio_Tracker/fetchHoldings',redisConfig(redisClient),fetchHoldings);
   app.use('/Portfolio_Tracker/fetchPortfolio',redisConfig(redisClient),fetchPortfolio);
   app.use('/Portfolio_Tracker/fetchReturns',redisConfig(redisClient),fetchReturns);   
}
