const Router = require('express').Router()
const Admission = require('../model/student.admission.js')



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
    // console.log(req.body)
    // res.json(req.body)
    // Create New Admission
    const newAdmission = new Admission(req.body)
    newAdmission.save(newAdmission)
        .then((data) => {
            res.send(data)
            console.log("Addmisson Successfully Submitted")
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = Router