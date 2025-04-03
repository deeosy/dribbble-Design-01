const { Schema, default: mongoose, SchemaType } = require("mongoose");


const AccountSchema = Schema({
    accountName: {type: String, required: true},
    accountType: {type: String, required: true},
    accountNumber: {type: Number, required: true},
    accountAddress: {type: String, required: true},
    accountPhone: {type:Number, required: true},
    bankId: {type: Schema.Types.ObjectId, required: true, ref: 'Bank'}
})

const AccountModel = mongoose.model('Account', AccountSchema)


module.exports = AccountModel