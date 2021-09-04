const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', {useMongoCliente: true})
mongoose.Promise = global.Promise

module.exports = mongoose
