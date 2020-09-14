const express = require('express');
const app = express();
const cors = require('cors');
const dbConnect=require('./src/db/connector');
const redisConnector=require('./src/cache/redisConnector');
require('dotenv/config');


//Middlewares
app.use(cors());
app.use(express.json());

//Connecting to redis cache server
const redisClient=redisConnector();

//Initializing routes
require('./src/api/routes/routes')(app,redisClient);

//Connecting to database
dbConnect();

//Start listening
app.listen(process.env.PORT, () => {
    console.log("Server started on " + process.env.PORT);
});