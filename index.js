const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

//motor plantiallas
app.set('view engine','ejs')
app.set('views',__dirname + '/views')
//middleware
app.use(express.static(__dirname + '/public'))

//views
app.use('/',require('./router/index'))
app.use('/tienda',require('./router/tienda'))
app.use('/contact',require('./router/contact'))
app.use('/about',require('./router/about'))

//error
app.use((req, res, next) => {
    res.status(404).render('404')
})

//servidor
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})