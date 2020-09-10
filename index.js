const express = require('express');
const app = express();
const cors = require('cors');
const dbConnect=require('')
require('dotenv/config');


//Middlewares
app.use(cors());
app.use(express.json());


//Initializing routes
require('./src/api/routes/routes')(app);

//Start listening
app.listen(process.env.PORT, () => {
    console.log("Server started on " + process.env.PORT);
});