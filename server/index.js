// npm i express mysql2 bcryptjs jsonwebtoken body-parser
const express = require('express');
const port =3005;
const app = express();
app.use(express.json());




let db_M = require('./config/db_config.js');
global.db_pool = db_M.pool;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const users_router = require('./routers/users.js');
app.use('/users',users_router);

app.listen(port,()=>{
    console.log(`now listening on port ${port} http://localhost:3005`);
})