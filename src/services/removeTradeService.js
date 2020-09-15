const getTicker = require("../db/getTicker");
const saveHolding=require('../db/saveHolding');
const flushCache=require('../cache/flushCache');
const deleteTicker = require("../db/deleteTicker");

//Implements the business logic for removing a trade
const TradeRemover=async (symbol,tno,redisClient)=>{
    flushCache(redisClient); //flushing the cache
    const ticker=await getTicker(symbol); //retrieving ticker to be removed from database
    const trade=ticker.trades[tno-1];   
    ticker.avgPrice=trade.prevAvg;   /* restoring ticker's previous state */  
    ticker.qty=trade.prevQty;            
    ticker.trades.splice(tno-1,1);
    return executeRemove(ticker,tno);
}

//Computes changes in portfolio after removing trade
const executeRemove=async (ticker,tno)=>{
    let flag=true;    //initially we assume removal does not remove ticker
    let backupTicker;let finalTicker; 
    ticker.trades.map((trade,index)=>{
        let count=0;
        if(index >= tno-1){  //re executes all trades on and after the removed trade
            backupTicker=ticker;   //getting backup of the ticker incase trade turns out to be infeasible
            trade.prevAvg=ticker.avgPrice;    //restoring previous state of ticker
            trade.prevQty=ticker.qty;
            if(trade.type === 'Buy'){    //handles buy trades
                ticker.avgPrice=((parseFloat(ticker.avgPrice)*parseFloat(ticker.qty))+(parseFloat(trade.price)*parseFloat(trade.qty)))/(parseInt(ticker.qty)+parseInt(trade.qty));
                ticker.qty=parseInt(ticker.qty)+parseInt(trade.qty);
            }
            else{       //handles sell trades
                ticker.qty=parseInt(ticker.qty)-parseInt(trade.qty);
            }
           if(ticker.qty < 0){  //checks trade feasibility
             flag=false;
             count=count+1;
             if(count === 1)
               finalTicker = backUpticker;  //restoring the backed up state since last proper trade  
            }  
        }
    });
    if(flag === false){   //if any trade was infeasible
        if(finalTicker.qty === 0){   //checks if ticker no longer exsiste in portfolio
            deleteTicker(finalTicker);
            return "success ! Ticker has been removed as a result" 
        }
        return saveHolding(finalTicker);
    }  
      
    if(ticker.qty === 0){     //checks if ticker no longer exsiste in portfolio
        deleteTicker(ticker);
        return "success ! Ticker has been removed as a result"
    }
          
    return saveHolding(ticker);
}

module.exports=TradeRemover;