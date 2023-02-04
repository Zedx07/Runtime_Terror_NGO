const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const path = require('path');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





dotenv.config({path:'./config.env'});
const port=process.env.PORT || 5000;

require('./db/conn.js');
require('./config/passjwt');




app.listen(port, ()=>{
    console.log("Server started! at "+port);
});

