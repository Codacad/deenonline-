const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    address:{
        type:String,
    },
    gender:{
        type:String,
    },
    dob:{
        type:Date,
        default:Date.now
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
    },
    contactnumber:{
        type:String
    },
    parentscontactnumber:{
        type:String,
    },
    course:{
        type:String
    },
    studentID:{
        type:String,
    },
    agree:{
        type:String
    }
}, {timestamps:true})

const admissioin = mongoose.model('Admission', Schema)
module.exports = admissioin