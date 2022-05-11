const mongoose = require('mongoose');


const MenuSchema = new mongoose.Schema({
    mess:{
        type:String,
        required:true
    },
    item:{
        type:String,
        required:true
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '1d' },
    }
})

module.exports = Menu = mongoose.model('menu',MenuSchema);