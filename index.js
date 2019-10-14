const express = require('express')
const bodyparser = require('body-parser')

const app = express()
const port = process.env.PORT || 2019

app.use(bodyparser.json())

const{movieRouter} = require('./routers')

app.use('/purwadhikaMovie',movieRouter)

app.listen(port,()=>console.log('API aktif di port '+ port))