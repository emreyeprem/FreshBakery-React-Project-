const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const PORT = 3005
const pgp= require('pg-promise')()
const connectionString = "postgres://localhost:5432/pastrydb"
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
// ----------------------- Middleware ---------------

// function authenticate(req,res,next) {
//
//   // authorization should be lower case
//   let authorizationHeader = req.headers["authorization"]
//
//
//   if(!authorizationHeader) {
//     res.status(400).json({error: 'Authorization failed!'})
//     return
//   }
//
//   // Bearer token
//   const token = authorizationHeader.split(' ')[1] // token
//
//   jwt.verify(token,'somesecretkey',function(error,decoded){
//
//     if(decoded){
//       userId = decoded.userid
//
//       db.one('SELECT userid,username,email,password FROM users WHERE id = $1',[userId]).then((response)=>{
//         next()
//       }).catch((error)=>{
//         res.status(400).json({error: 'User does not exist!'})
//         })
//       }
//     })
//   }
// -------------------- USER REGISTRATION ------------------

app.post('/api/register',function(req,res){
  let username = req.body.username
  let email = req.body.email
  let password = req.body.password
db.one('SELECT userid,username,email,password FROM users WHERE email = $1',[email]).then((user)=>{
console.log(user)
res.json('This email is already taken. Please try with another credential!')

}).catch((error)=>{
console.log(error)
if(error.code == 42703 || error.received == 0){
  bcrypt.hash(password, 10, function(err, hash) {

        if(hash) {
            db.none('INSERT INTO users (username,email,password) VALUES ($1,$2,$3)',[username,email,hash]).then(()=>{
              res.json({success: true})
            })
          }
        })
      }
    })
  })

app.post('/login',function(req,res){
  let username = req.body.username
  let email = req.body.email
  let password = req.body.password

  db.one('SELECT userid,username,email,password FROM users WHERE username = $1',[username]).then((response)=>{
         console.log('User is found')
        // check for the password
        bcrypt.compare(password,response.password,function(error,result){
          if(result) {
            // password match

            // create a token
            const token = jwt.sign({ userid : response.userid },"somesecretkey")

            // send back the token to the user
            res.json({token: token})

          } else {
            // password dont match
            res.json('The password you entered is incorrect!')
          }
        })

  }).catch((error)=>{
    console.log(error)
    console.log(error.received)
    if(error.received == 0){
       res.json('The username you entered is invalid!')
      }

  })
})
