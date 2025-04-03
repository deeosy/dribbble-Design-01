const express = require('express')  // 1st importing express
const bodyParser = require('body-parser');  // 2nd importing body parser
const { connect, default: mongoose } = require('mongoose'); // 17th-a import mongoose
const bankRoutes = require('./routes/BankRoute');  // 18th import routes from bankroutes.js
const accountRoutes = require('./routes/AccRoute')

const server = express() //3rd
const port = 5000  // 4th

//middleware
server.use(bodyParser.json()) // 6th
 

// routes
server.use(bankRoutes) // 19th
server.use(accountRoutes)


// 7th-b mongoose connection, we picked the Link from the Mongo DB website, then we picked the password and replaced it with <db_password> which is located in the link below
mongoose.connect('mongodb+srv://deeosy:r9jwOZyjEh8ePJGB@cluster1.ughdajq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
    .then((result) => {
    // server going live
    server.listen(port, () => console.log(`Server is live on http://localhost:${port}`)) // 5th 
   }).catch((error)=>console.log(error))
 

