const Holding=require('../db/models');


    async function add(trade){
       
       try{
          const ticker=await Holding.findOne({'ticker':trade.ticker});
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
              const holding=new Holding(temp);
              await holding.save();
              return "success";
             }
}

const handleSellTrade=async function(trade,ticker){
    if(trade.qty > ticker.qty)
                   return "failure";
                 else{
                    trade.prevAvg=ticker.avgPrice;
                    trade.prevQty=ticker.qty;
                    ticker.trades.push[trade];
                    ticker.avgPrice=((parseFloat(ticker.avgPrice)*parseFloat(ticker.qty))-(parseFloat(trade.price)*parseFloat(trade.qty)))/(parseFloat(ticker.qty)-parseFloat(trade.qty));
                    ticker.qty=parseInt(ticker.qty)-parseInt(trade.qty);
                    const holding=new Holding(ticker);
                    await holding.save();
                    return "success";     
                 }   
}

const handleBuyTrade=async function(trade,ticker){
    trade.prevAvg=ticker.avgPrice;
                 trade.prevQty=ticker.qty;
                 ticker.trades.push(trade);
                 ticker.avgPrice=((parseFloat(ticker.avgPrice)*parseFloat(ticker.qty))+(parseFloat(trade.price)*parseFloat(trade.qty)))/(parseInt(ticker.qty)+parseInt(trade.qty));
                 ticker.qty=parseInt(ticker.qty)+parseInt(trade.qty);
                 const holding=new Holding(ticker);
                 await holding.save();
                 return "success"; 
}


module.exports=add;