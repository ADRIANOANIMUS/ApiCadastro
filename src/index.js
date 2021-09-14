const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./controllers/authControllers')(app)
require('./controllers/projectController')(app)



app.listen(3000)

