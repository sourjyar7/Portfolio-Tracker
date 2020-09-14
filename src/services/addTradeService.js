const handleFirstTrade=require('./handleFirstTrade');
const handleSellTrade=require('./handleSellTrade');
const handleBuyTrade=require('./handleBuyTrade');
const getTicker=require('../db/getTicker');
const flushCache=require('../cache/flushCache');

//Implements the business logic for adding a new trade on a ticker
    async function TradeAdder(trade,redisClient){
       //Flushing the redis cache 
       flushCache(redisClient);
       try{
          const ticker=await getTicker(trade.ticker);
          if(ticker == null){
            return handleFirstTrade(trade);
          }
          else{
              if(trade.type == 'Sell'){
                 return handleSellTrade(trade,ticker);
              }
              else{
                 return handleBuyTrade(trade,ticker); 
              }   
          }
          
       }
       catch(err){
          
          return err;
       }
    }

module.exports=TradeAdder;