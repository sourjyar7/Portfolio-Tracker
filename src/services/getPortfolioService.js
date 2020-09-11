const getPortfolio=require('../db/getPortfolio');

//Implements business logic for retrieving portfolio
const PortfolioRetriever=async ()=>{
   const portfolio=await getPortfolio();
   return portfolio;
}

module.exports=PortfolioRetriever;