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
            res.render('include/admission_form.ejs', {
                message:"Your form has been submitted successfully, we will reach you soon!",
                student:data.name
            })
        })
        .catch(err => {
            console.log(err)
        })
})

Router.post("/", (req, res) => {
    const newMessage = new Message(req.body)
   newMessage.save()
        .then((data) => {
            res.render("index.ejs", {
                message:"Message sent successfully, we will reach you soon!",
                data
            })
        })
        .catch(err => {
            console.log(err)
        })
})

Router.get('/messages', (req, res) => {
    Message.find({}, (err, data) => {
        if(data){
            res.render('include/message', {
                data
            })
        }else{
            res.send("<h3>Some errors occured.<h3>")
        }
    })
})

module.exports = Router