const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const PORT = 3005
const pgp= require('pg-promise')()
const connectionString = "postgres://localhost:5432/book"
const db = pgp(connectionString)
const bcrypt = require('bcryptjs');
var cors = require('cors')
const jwt = require('jsonwebtoken')
app.use(cors())
// parse application/json
app.use(bodyParser.json())
//-----------------to enable CORS-------
app.use(function(req, res, next) {
  //
  // res.header("Access-Control-Allow-Headers: Authorization")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Authorization,X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, function(){
  console.log('Server is running...')
})
