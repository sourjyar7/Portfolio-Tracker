const addTrade=require('./addTrade');
const removeTrade=require('./removeTrade');
const updateTrade=require('./updateTrade');
const fetchHoldings=require('./fetchHoldings');
const fetchPortfolio=require('./fetchPortfolio');
const fetchReturns=require('./fetchReturns');

//Initialises all the routes using express app object
module.exports=function(app){
  
   app.use('/Portfolio_Tracker/addTrade',addTrade);
   app.use('/Portfolio_Tracker/removeTrade',removeTrade);
   app.use('/Portfolio_Tracker/updateTrade',updateTrade);
   app.use('/Portfolio_Tracker/fetchHoldings',fetchHoldings);
   app.use('/Portfolio_Tracker/fetchPortfolio',fetchPortfolio);
   app.use('/Portfolio_Tracker/fetchReturns',fetchReturns);   
}
