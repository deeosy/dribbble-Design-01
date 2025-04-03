const AccountModel = require("../model/AccModels")

const createAccountController = async (req, res) => {
  try {
    const { accountName, accountType, accountNumber, accountAddress, accountPhone, bankId } = req.body // retrieve account info from req.body
    const account = new AccountModel({ accountName, accountType, accountAddress, accountNumber, accountPhone, bankId })     // Create a new account
    const savedAccount = await account.save() // saves to database

    res.status(200).json({ message: 'Account created successfully', data: savedAccount})
  } catch (error) {
    res.status(500).json({message:'Error creating account', error: error.message})
  }
}

const getAccountController = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) { // Get single account by ID , we writing a if else statement to get a single ID if it is provided if not provide (else) provide all accounts
      const account = await AccountModel.findById(id).populate('bankId','name phone -_id')
      if (!account){
        return  res.status(404).json({message: 'Account not found'});
      }
      return res.status(200).json(account)
    }else{ // Get all accounts if no ID is provided
      const accounts = await AccountModel.find().populate('bankId', 'name phone -_id') // this looks into the banks and provides the linking bank name, bank phone number with out the bank ID
      res.status(200).json(accounts)
    }
  } catch (error) {
    res.status(500).json({message: 'Error retrieving accounts', error: error.message})
  }
}

const updateAccount = async (req, res) => {
  const { id, accountName, accountType, accountNumber, accountAddress, accountPhone } = req.body; // locate info from the request body based on the id
  
  try {
    const acc = await AccountModel.findById(id);
    if(!acc){
      return res.status(404).json({message: "Account not found"})
    }
    // update these fields only if they are provided in the request
    acc.accountName = accountName
    acc.accountType = accountType
    acc.accountNumber = accountNumber
    acc.accountAddress = accountAddress
    acc.accountPhone = accountPhone

    const updatedAcc = await acc.save();

    res.status(200).json({message: "Account updated successfully", updatedAcc});
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const deleteAccount = async (req, res) => {
  try {
    const deletedAcc = await AccountModel.findByIdAndDelete(req.params.id)

    if (deletedAcc){
      res.status(200).json({message: "Account deleted successfully"})
    }else{
      res.status(404).json({message: "Account deleted successfully"})
    }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

module.exports =  { createAccountController, getAccountController, updateAccount, deleteAccount }