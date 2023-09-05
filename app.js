const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes")
const dotenv = require("dotenv");
const { Console } = require("console");


dotenv.config();

app.use(express.json());


app.use( "/user" , userRoutes );

const PORT = process.env.PORT ; 

app.listen( PORT , () => {

    console.log( " serever listening");
});




