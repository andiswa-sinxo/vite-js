var express = require('express')
var cors = require('cors')
require('dotenv').config()

var app = express()
 
app.use(cors())

const pg = require('pg');
const Pool = pg.Pool;



let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local){
    useSSL = true;
}

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString,
    ssl :  {
    rejectUnauthorized: false
    }
  });







let PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
})