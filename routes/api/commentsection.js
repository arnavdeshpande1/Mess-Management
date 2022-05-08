const express = require('express');
const router = express.Router();
const { validationResult } = require("express-validator");
const config = require('config');

const Comment = require('../../models/Comment');

// @route    GET api/comment
// @desc     Get all Comments
// @access   Public
router.get('/', async (req, res) => {
  try {
    const comment = await Comment.find().populate(['mess','comment','rating']);
    
    // ..................  calculate rating logic  ..................

    // console.log(comment)
    var map1 = new Map();
    comment.forEach(element => {
        if(map1.has(element.mess)){
            var value = map1.get(element.mess)
            value++
            // map1.delete(element.mess)
            map1.set(element.mess,value)
        }
        else{
            var value = map1.has(element.mess) ? map1.get(element.mess) : 1
            value++
            map1.set(element.mess,value)
        }
    });

    // console.log(map1)
    const arr = []
    map1.forEach((values,keys)=>{
        if(values%2!==0) values++
        values = values/2
        arr.push([keys,values])

    })

    // console.log(arr)

    

    res.json(comment);
  } 
  catch (err) {
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

    const { mess,comment,rating } = req.body;
    try {
        
        let comments = await Comment.findOne({ comment });
        
        
        comments = new Comment({
            mess,
            comment,
            rating
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