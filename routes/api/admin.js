const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check,validationResult } = require("express-validator");
const { findOne } = require('../../models/Admin');
const config = require('config');
const jwt = require('jsonwebtoken');

const Admin = require('../../models/Admin');

router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({min:6})
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }

    const { name, email, password} = req.body; 

    try {
        
        let admin = await Admin.findOne({ email });
        
        if(admin){
            return res.status(400).json({ errors: [{msg:'Account already exists'}]});

        }

        const avatar = gravatar.url(email,{
            s:'200',
            r:'pg',
            d:'mm'
        })

        admin = new Admin({
            name,
            email,
            avatar,
            password
        });

        const salt = await bcrypt.genSalt(10);

        admin.password = await bcrypt.hash(password,salt);

        await admin.save();

        const payload = {
            admin : {
                id : admin.id
            }
        }

        jwt.sign(payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err,token) =>{
                if(err) throw err;
                res.json({ token })
            }
            );

        // res.send('Admin Registered')

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }


    
});

module.exports = router;