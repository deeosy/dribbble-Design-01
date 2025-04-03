const express = require('express'); // 14th import express
const { createBank, updateBank, getBank, deleteBank } = require('../controllers/BankController');
const {body} = require('express-validator') //body being our middleware
const BankModel =require('../model/BankModel')

const router = express.Router()  // 15th declare router

// 16th setting our controllers
router.post('/bank', [
    body('name').trim().notEmpty().withMessage('Name field empty'),
    body('phone').isMobilePhone('en-GH').withMessage('Phone field error').custom((value, {req}) => {  // we checking if phone number already exist in the database
      return BankModel.findOne({'phone':value}).then((databasePhoneNumber) =>{
        if(databasePhoneNumber){
            return Promise.reject('Phone already in use')
        }
      })     
    }),

], createBank)
router.get('/bank/:id?', getBank) // 24th we will add the id param to the get router
router.put('/bank/:id', updateBank)
router.delete('/bank/:id', deleteBank)

module.exports = router // 17th exporting our router  