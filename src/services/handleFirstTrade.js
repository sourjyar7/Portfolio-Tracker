const saveHolding=require('../db/saveHolding');

//Implements the business logic for when a ticker is traded for the first time ever
const handleFirstTrade=async function(trade){
    if(trade.type=='Sell')
              return "failure";
            else{    
              trade.prevAvg=0.0;
              trade.prevQty=0;
              let temp={};
              temp.ticker=trade.ticker;
              temp.avgPrice=trade.price;
              temp.qty=trade.qty;
              temp.trades=[];
              temp.trades.push(trade);
              return saveHolding(temp);
             }
}

module.exports=handleFirstTrade;