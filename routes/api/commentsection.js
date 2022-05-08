const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check,validationResult } = require("express-validator");
const { findOne } = require('../../models/Comment');
const config = require('config');
const jwt = require('jsonwebtoken');

const Comment = require('../../models/Comment');

// @route    GET api/comment
// @desc     Get all Comments
// @access   Public
router.get('/', async (req, res) => {
  try {
    const comment = await Comment.find().populate(['mess','comment']);
    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.post('/',
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }

    const { mess,comment } = req.body;
    try {
        
        let comments = await Comment.findOne({ comment });
        
        
        comments = new Comment({
            mess,
            comment
        });

        await comments.save();

        const payload = {
            user : {
                id : comments.id
            }
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }


    
});

module.exports = router;