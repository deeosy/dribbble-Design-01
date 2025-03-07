// import express, body-parser
const express = require('express')
const bodyParser = require('body-parser');

//create express server instance
const server = express()
const port = 4000

// middlewares
server.use(bodyParser.json())

//Database
let banksDb = []

//bank model
class BankModel {
    constructor({name, location, branch, phone, address, accountNumber}) {
        this.name =name;
        this.location = location;
        this.branch = branch;
        this.phone = phone;
        this.address = address;
        this.accountNumber = accountNumber;
    }

    save(){
        banksDb.push(this)
        return this;
    }

    static all(){
      return banksDb
    }

    static update(updateInfo ={}){
      // 1st find the bank we want to update
      banksDb = banksDb.map(bank => {
        //then we update its info
        if(bank.name === updateInfo.name){
          return {...bank, ...updateInfo}
        }
        return bank;
      })
      return updateInfo;
    }

    static delete({name}){
      let deletedBank = null;
      banksDb = banksDb.filter(bank =>{
        if(bank.name !== name){
          return true;
        }
        deletedBank = bank;
        return false;
      })
      return deletedBank;
    }
}


//request handlers // controllers
const listBanksCtler = (req, res) => {
    //list all banks  
    const banks = BankModel.all()
    res.json({data: banks})
}

const createBankCtler = (req, res) => {
  //create a bank
  const {name, location, branch, phone, address, accountNumber} = req.body;

  const bank = new BankModel({name, location, branch, phone, address, accountNumber})
  bank.save();
  res.json({message: 'create successful', data: bank})
}

const updateBankCtler = (req, res) => {
  // edit a bank
  const {name, location, branch, phone, address, accountNumber} = req.body;
  const updatedBank = BankModel.update({name, location, branch, phone, address, accountNumber}) 
  res.json({message: 'update successful', data: updatedBank})
}

const deleteBankCtler = (req, res) => {
  // delete a bank
  const {name} = req.body;
  const deletedBank = BankModel.delete({name});
  res.json({message:'bank deleted', data:deletedBank})
}

//routes
//view banks - get method
server.get('/bank', listBanksCtler)
//create bank -post method
server.post('/bank', createBankCtler )
//update bank - put method
server.put('/bank', updateBankCtler)
//delete bank - delete method
server.delete('/bank', deleteBankCtler)

//start server
server.listen(port, ()=> console.log(`Server is live on: http://localhost:${port}`))
