const flushCache = require("../cache/flushCache");
const getTicker = require("../db/getTicker");
const saveHolding=require('../db/saveHolding');


//Implements the business logic for updating a trade
const TradeUpdater=async (symbol,tno,info,redisClient)=>{
    flushCache(redisClient);    //flushing the cache
    const ticker=await getTicker(symbol);
    const trade=ticker.trades[tno-1];
    ticker.avgPrice=trade.prevAvg;
    ticker.qty=trade.prevQty;
    trade.type=info.type;
    trade.qty=info.qty;
    trade.price=info.price;
    ticker.trades[tno-1]=trade;
    return executeUpdate(ticker,tno);
}

//Computes changes in portfolio after updating trade
const executeUpdate=async (ticker,tno)=>{
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

module.exports=TradeUpdater;