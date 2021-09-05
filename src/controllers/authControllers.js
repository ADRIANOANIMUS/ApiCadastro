const express = require('express')

const User = require('../models/User')

const router = express.Router()

router.post('/register', async (req, res) =>{
    try{

        if(await user.findOne({email}))
        return res.send(400).send({error:'User email already exists'})       

        const user = await User.create(req.body)

        return res.send({user})
        } catch(err){
            return res.status(400).send({error: 'Registration Failed'})
    }
})

module.exports = app => app.use('/auth', router)