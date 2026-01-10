const express = require('express');
const SingUpContollar = require('../../contollar/SingUpContollar');
const authrouter = express.Router()
authrouter.use(express.json());

authrouter.post('/signup', SingUpContollar)

module.exports = authrouter