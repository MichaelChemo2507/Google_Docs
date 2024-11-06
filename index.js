const express = require('express');
const port =2506;
const app  = express();
app.use(express.json());

let db_M = require('./database');
global.db_pool = db_M.pool;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port,()=>{
    console.log(`now listening on port ${port} http://localhost:2506/front/register`);
})