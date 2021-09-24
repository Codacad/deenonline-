const mongoose = require('mongoose')

// Course Schema
let CourseSchema = new mongoose.Schema({
    course1:{
        type:String
    },
    course2:{
        type:String
    },
    course3:{
        type:String
    },
    course4:{
        type:String
    },
    course5:{
        type:String
    },
    course6:{
        type:String
    },
    course7:{
        type:String
    },
    course8:{
        type:String
    },
    course9:{
        type:String
    },
})



// Admission Schema
let AdmissionSchema = new mongoose.Schema({
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
    courses:{type:Array},
    studentID:{
        type:String,
    },
    agree:{
        type:String
    }
}, {timestamps:true})



const Admission = mongoose.model('Admission', AdmissionSchema)
const Courses = mongoose.model('Courses', CourseSchema)
module.exports = {Admission, Courses}