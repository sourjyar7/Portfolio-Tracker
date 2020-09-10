const mongoose=require('mongoose');

//Connect to DB
const dbConnect=function(){
mongoose.connect(process.env.ATLAS_Connector,{ useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database");
}); 
}

module.exports=dbConnect;