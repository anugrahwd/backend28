const express = require('express');
const dotenv = require('dotenv');

const connection = require('./config/mysql.js')
const hospitalRouter = require('./routes/hospitalRoute.js')

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

connection.connect()

app.use(express.json());
app.use(hospitalRouter)

app.listen(port, function() {
    console.log("server running on", port)
})