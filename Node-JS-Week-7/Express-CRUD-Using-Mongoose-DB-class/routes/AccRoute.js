const express = require('express');
const { createAccountController, getAccountController, updateAccount, deleteAccount } = require('../controllers/AccController')

const router = express.Router()

router.post('/account', createAccountController)
router.get('/account/:id?', getAccountController)
router.put('/account/:id', updateAccount)
router.delete('/account/:id', deleteAccount)


module.exports = router