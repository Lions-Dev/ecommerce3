const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.render('tienda',{titulo:'Titulo tienda'})
})

module.exports = router