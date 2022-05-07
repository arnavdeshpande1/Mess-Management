const mongoose = require('mongoose');


const MenuSchema = new mongoose.Schema({
    mess:{
        type:String,
        required:true
    },
    item:{
        type:String,
        required:true
    }
})

module.exports = Menu = mongoose.model('menu',MenuSchema);