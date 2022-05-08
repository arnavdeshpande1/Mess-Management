const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
    mess:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
})

module.exports = comment = mongoose.model('comment',CommentSchema);