const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const router = Router()

// -->  /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body
        const candidate = await User.findOne({email})

        if (candidate) {
          return res.status(400).json({ message: 'Such user already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})

        await user.save()

        res.status(201).json({ message: 'User created successfully'})

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong, please try again' })
    }
})
// 500 --> error on a server side

// -->  /api/auth/login
router.post('/login', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

module.exports = router