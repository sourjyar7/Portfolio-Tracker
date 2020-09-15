const flushCache = require("../cache/flushCache");
const getTicker = require("../db/getTicker");
const saveHolding=require('../db/saveHolding');
const deleteTicker=require('../db/deleteTicker');


//Implements the business logic for updating a trade
const TradeUpdater=async (symbol,tno,info,redisClient)=>{
   
    const ticker=await getTicker(symbol);   // retrieving required ticker from db
    const trade=ticker.trades[tno-1];       // extracting the trade to be updated
    ticker.avgPrice=trade.prevAvg;          /* re initialising ticker to previous state */    
    ticker.qty=trade.prevQty;                     
    trade.type=info.type;                   /* updating the trade with the new figures */ 
    trade.qty=info.qty;                         
    trade.price=info.price;                                             
    ticker.trades[tno-1]=trade;
    return executeUpdate(ticker,tno);       // saving changes and executing all other trades that follow 
}

//Computes changes in portfolio after updating trade
const executeUpdate=async (ticker,tno)=>{
    let flag=true;   // initially we assume the update is feasible
    ticker.trades.map((trade,index)=>{
        if(index >= tno-1){    // re executing all trades from and after the updated trade
            trade.prevAvg=ticker.avgPrice;
            trade.prevQty=ticker.qty;
            if(trade.type === 'Buy'){  
                ticker.avgPrice=((parseFloat(ticker.avgPrice)*parseFloat(ticker.qty))+(parseFloat(trade.price)*parseFloat(trade.qty)))/(parseInt(ticker.qty)+parseInt(trade.qty));
                ticker.qty=parseInt(ticker.qty)+parseInt(trade.qty);
            }
            else{
                ticker.qty=parseInt(ticker.qty)-parseInt(trade.qty);
            }
            if(ticker.qty < 0 || ticker.avgPrice < 0) //checking if the trade execution produces a valid state
                flag=false;    
        }
        
    });
    if(ticker.qty < 0 || ticker.avgPrice < 0 || flag === false)
      return "failure ! Infeasible update"
    if(ticker.qty === 0){
      deleteTicker(ticker);    //removes ticker from portfolio if quantity becomes 0
      flushCache(redisClient);
      return "success ! Ticker removed as a result of update";    
    }   
    flushCache(redisClient);    //flushing the cache
    return saveHolding(ticker);  //saving results to database
}

module.exports=TradeUpdater;