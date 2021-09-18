const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./controllers/index')(app)




app.listen(3000)

