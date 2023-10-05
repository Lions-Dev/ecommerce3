const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.render('about',{titulo:'Titulo about'})
})

module.exports = router