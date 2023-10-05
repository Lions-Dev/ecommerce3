const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.render('index',{titulo:'Titulo index'})
})

module.exports = router