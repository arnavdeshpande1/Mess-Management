const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check,validationResult } = require("express-validator");
const { findOne } = require('../../models/Menu');
const config = require('config');
const jwt = require('jsonwebtoken');

const Menu = require('../../models/Menu');

// @route    GET api/menu
// @desc     Get all items
// @access   Public
router.get('/', async (req, res) => {
  try {
    const menu = await Menu.find().populate(['mess', 'item']);
    res.json(menu);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.post('/',[
    check('mess','Mess Name is required').not().isEmpty(),
    check('item','Menu Item name is required').not().isEmpty()
],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }

    const { mess, item} = req.body;
    try {
        
        let menu = await Menu.findOne({ mess });
        
        
        menu = new Menu({
            mess,
            item
        });

        await menu.save();

        const payload = {
            user : {
                id : menu.id
            }
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }


    
});

module.exports = router;