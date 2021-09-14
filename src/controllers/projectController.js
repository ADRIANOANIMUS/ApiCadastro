const express = require('express')
const authMiddleware = require('../middleware/auth')

router.use(authMiddleware)

const router = express.Router()

router.get('/', (req, res)=> {
    res.send({ok: true})
})

module.exports = app => app.use ('/projects', router)