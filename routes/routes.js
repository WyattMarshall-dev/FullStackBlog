const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');



router.post('/register', async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User( {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    const result = await user.save();
    const {password, ...data} = await result.toJSON();

    res.send(data);
})

router.post('/login', async (req, res) => {
    const user = await User.findOne( { email: req.body.email } );

    if(!user) {
        return res.status(404).send( {
            message: "User not found..."
        })
    }

    if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send( {
            message: "Invalid Login..."
        })
    }

    const token = jwt.sign({_id: user._id, name: user.name}, process.env.JWT_KEY);

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    })

    res.send({
        message: "success..."
    });
})

router.get('/user', auth, async (req, res) => {
    try {
        const cookie = req.cookies['jwt'];
        const claims = jwt.verify(cookie, process.env.JWT_KEY);
    if(!claims){
        return res.status(401).send( {
            message: "Unauthorized..."
        })
    }

    const user = await User.findOne( {_id: claims._id});
    const {password, ...data} = await user.toJSON();

    res.send(data);  
    }
    catch(e) {
        return res.status(401).send( {
            message: "Unauthorized..."
        })
    }
} )

router.post('/logout', (req, res) => {

    res.clearCookie('jwt', " ", {
        httpOnly: true,
        maxAge: new Date(Date.now() - 50000)
    })
    res.send({
        message: 'Logged Out...'
    })
})


module.exports = router;