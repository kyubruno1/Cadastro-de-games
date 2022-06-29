const express = require('express')
const app = express()
const conn = require('./db/conn')

//models 
const Games = require('./models/Games')

//config json response
app.use(express.json())


//public folder
app.use(express.static('public'))

//routes
const GamesRoutes = require('./routes/GamesRoutes')
app.use('/', GamesRoutes)




conn.sync()
    .then(() => {    
        app.listen(3000)
})  .catch(err => console.log(err))