const mongoose = require('mongoose');


const ReviewsSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    }
})

module.exports = Reviews = mongoose.model('review',ReviewsSchema);