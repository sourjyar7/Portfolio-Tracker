const Holding=require('../db/models');

//Retrieves and returns entire collection of holdings from database

const getPortfolio=async ()=>{
   const portfolio=await Holding.find({});
   return portfolio;
}

module.exports=getPortfolio;