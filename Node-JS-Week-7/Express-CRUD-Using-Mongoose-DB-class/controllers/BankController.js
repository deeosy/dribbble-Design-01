const AccountModel = require("../model/AccModels")
const BankModel = require("../model/BankModel") 
const { validationResult } = require('express-validator')


// 12th create controllers 
const createBank =(req, res) => {
  // 20th get the data from the request body
  const {name, location, address, phone, accountNumber} = req.body

  //validation check
  const error = validationResult(req);
  if(!error.isEmpty()){
    console.log(error);
    
    return res.json({message:error.array()[0].msg })
  }


  // 21st-a codes to  create and push data to the model 
  const bank = new BankModel({name, location, address, phone, accountNumber})
  // 22nd save data in model and give a response. But first lets create a promise
  bank.save().then((result)=>{
    res.json({message: 'bank created successfully', data: result})
  }).catch((error)=>console.log(error))
}
 
const getBank =(req, res) => {
    let {id} = req.params // 23rd-ii destructing id from req.params
    
    if(id){
        // we renamed _id from MongoDB to id 
        BankModel.findById(id).then((result) => { //25th finding banks with a specific id from the id created from MongoDb
            res.json({message: 'Bank detail found', data: result})
        } ).catch((error)=>console.log(error))        
    } else{
        BankModel.find().then((result) => { // 23rd-i finding all banks in the database
            res.json({message:'Bank details found', data: result})
        }).catch((error)=>{
            console.log(error)
            res.json({message:'Error fetching bank details', data: error})
        })
    } 
}

const updateBank =(req, res) => {
    const { id, name, location, address, phone, accountNumber }  = req.body // call the request body and add the id 
    //validation check
    const error = validationResult(req);
    if(!error.isEmpty()){
        return
    }

    try {
        BankModel.findById(id).then((bank) => {
            if(bank){
                bank.name = name,
                bank.location = location,
                bank.address = address,
                bank.phone = phone,
                bank.accountNumber = accountNumber,
                bank.save(),
                res.json(bank)
            } else {
                res.json('Bank Not found')
            }})} catch (error) {
        res.json({message: error.message})
    }
}

// const deleteBank = async (req, res) => {
//     try {
//         const bankId = await BankModel.findById(req.params.id) // this will look for the id in the request body
//         if(bankId){
//             await bankId.deleteOne()
//             res.json('Bank removed')
//         } else{
//             res.json('Bank not found')
//         }
        
//     } catch (error) {
//         res.json({ message: error.message })
//     }
//   }

const deleteBank = async (req, res) => {
    try {
        const deleteBankId = await BankModel.findByIdAndDelete(req.params.id) // this will look for the id in the request body
        if(deleteBankId){
            AccountModel.deleteMany({bankId: deleteBankId._id})
                .then(() => {
                    res.json({message: 'Bank removed', deleteBankId})
                }).catch((err) => console.log(err))
            res.json('Bank removed')
        } else{
            res.json('Bank not found')
        }
        
    } catch (error) {
        res.json({ message: error.message })
    }
  }



module.exports = {createBank, getBank, updateBank, deleteBank} // 13th export controllers