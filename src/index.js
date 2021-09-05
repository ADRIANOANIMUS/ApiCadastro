const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./controllers/authControllers')(app)

app.listen(3000)

