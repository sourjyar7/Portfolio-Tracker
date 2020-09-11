const getHoldings=require('./getHoldingsService');

//Implements business logic for calculating returns
const ReturnsRetriever=async ()=>{
   const holdings=await getHoldings();
   if(holdings.length === 0)
      return 0;
   
   //logic for return calculation
   let returns=0;
   holdings.map((ticker,index)=>{
      returns=returns+((100-ticker.avgPrice)*ticker.qty); 
   });

   return returns;
}

module.exports=ReturnsRetriever;