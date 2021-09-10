const Router = require('express').Router()
const Admission = require('../model/student.admission.js')
const Message = require('../model/message.js')


Router.get("/", (req, res) => {  
    res.render('index.ejs') 
})

Router.get('/admission', (req, res) => {
    res.render('include/admission_form.ejs')
})

Router.get("/admission/api", (req, res) => {
    Admission.find({}, (err, admissions) => {
        res.send(admissions);
    })
})

Router.post("/admission", (req, res) => {
    console.log(req.body.name)
    const newAdmission = new Admission(req.body)
   newAdmission.save()
        .then((data) => {
            res.send(data)
            console.log("Addmisson Successfully Submitted")
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
})

Router.post("/", (req, res) => {
    const newMessage = new Message(req.body)
   newMessage.save()
        .then((data) => {
            res.send(data)
            console.log("Message send successfully")
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = Router