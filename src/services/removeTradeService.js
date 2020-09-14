const getTicker = require("../db/getTicker");
const saveHolding=require('../db/saveHolding');
const flushCache=require('../cache/flushCache');

//Implements the business logic for removing a trade
const TradeRemover=async (symbol,tno,redisClient)=>{
    flushCache(redisClient); //flushing the cache
    const ticker=await getTicker(symbol);
    const trade=ticker.trades[tno-1];
    ticker.avgPrice=trade.prevAvg;
    ticker.qty=trade.prevQty;
    ticker.trades.splice(tno-1,1);
    return executeRemove(ticker,tno);
}

//Computes changes in portfolio after removing trade
const executeRemove=async (ticker,tno)=>{
    ticker.trades.map((trade,index)=>{
        if(index >= tno-1){
            trade.prevAvg=ticker.avgPrice;
            trade.prevQty=ticker.qty;
            if(trade.type === 'Buy'){
                ticker.avgPrice=((parseFloat(ticker.avgPrice)*parseFloat(ticker.qty))+(parseFloat(trade.price)*parseFloat(trade.qty)))/(parseInt(ticker.qty)+parseInt(trade.qty));
                ticker.qty=parseInt(ticker.qty)+parseInt(trade.qty);
            }
            else{
                ticker.qty=parseInt(ticker.qty)-parseInt(trade.qty);
            }   
        }
    });
    return saveHolding(ticker);
}

module.exports=TradeRemover;