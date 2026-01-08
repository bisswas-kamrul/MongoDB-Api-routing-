const express = require('express');
const authrouter = express.Router()

authrouter.get('/signup', (req, res) => {
    res.send({
        name: "kamrul-bisswas",
        email: "bisswaskamruldev@gmail.com",
        password: "#016102"
    })
})

module.exports = authrouter