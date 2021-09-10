const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phonenumber:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})

const message = mongoose.model('Message', Schema)
module.exports = message