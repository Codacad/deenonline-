const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    dob:{
        type:Date,
        default:Date.now,
        require:true
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    zipcode:{
        type:Number
    },
    country:{
        type:String
    },
    classtime:{
        type:String,
        require:true
    },
    contactnumber:{
        type:String,
        require:true
    },
    parentscontactnumber:{
        type:String,
    },
    id:{
        type:String,
        require:true
    },
    agree:{
        type:String,
        require:true
    }
})

const admissioin = mongoose.model('Admission', Schema)
module.exports = admissioin