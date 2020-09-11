const saveHolding=require('../db/saveHolding');

//Implements the business logic for when a ticker is sold
const handleSellTrade=async function(trade,ticker){
    if(trade.qty > ticker.qty)
                   return "failure";
                 else{
                    trade.prevAvg=ticker.avgPrice;
                    trade.prevQty=ticker.qty;
                    ticker.trades.push(trade);
                    ticker.qty=parseInt(ticker.qty)-parseInt(trade.qty);
                    return saveHolding(ticker);     
                 }   
}

module.exports=handleSellTrade;