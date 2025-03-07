const express = require('express');
const bodyParser = require('body-parser')

const server = express()
const port = 4000

//middleware
server.use(bodyParser.json())

//database
let bankDb = []

//models
function BankModel({name, location, phone, address, accountNumber}){
    const bank={
        name,
        location,
        phone,
        address,
        accountNumber,

        //method to save the bank details to the database
        save:function(){
            bankDb.push(this);
            return this
        }   
    }
    return bank
}

//controllers
const createBankDetails = (req, res) => {
    //getting info from the request body
  const {name, location, phone,address,accountNumber}= req.body
  const bank = new BankModel({
    name,
    location,
    phone,
    address,
    accountNumber
  })
  bank.save()
  res.json({message:'Bank created successfully', data:bank})
}

const retrieveBankDetails = (req, res) => {
  res.json({message:'Bank details retrieved', data:bankDb})
}


//routes
server.post('/bank', createBankDetails)
server.get('/bank', retrieveBankDetails)




server.listen(port, ()=>console.log(`server is live on http://localhost:${port}`))

