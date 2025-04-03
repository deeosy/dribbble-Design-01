const { default:mongoose, Schema } = require('mongoose');  // 8th import mongoose

// 9th Create Schema
const BankSchema = mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: Number, required: true},
    accountNumber: {type: Number, required: true},
    accounts: [
        { accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account'} }
    ]
})

// 10th create model
const BankModel = mongoose.model("Bank", BankSchema)

// 11th export model
module.exports = BankModel 