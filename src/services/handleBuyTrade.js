const saveHolding=require('../db/saveHolding');

//Implements the business logic for when a ticker is bought
const handleBuyTrade=async function(trade,ticker){
    trade.prevAvg=ticker.avgPrice;
                 trade.prevQty=ticker.qty;
                 ticker.trades.push(trade);
                 ticker.avgPrice=((parseFloat(ticker.avgPrice)*parseFloat(ticker.qty))+(parseFloat(trade.price)*parseFloat(trade.qty)))/(parseInt(ticker.qty)+parseInt(trade.qty));
                 ticker.qty=parseInt(ticker.qty)+parseInt(trade.qty);
                 return saveHolding(ticker); 
}

module.exports=handleBuyTrade;