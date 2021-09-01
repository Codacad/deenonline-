const Router = require('express').Router()
const Admission = require('../model/student.admission.js')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "/deenonline-/IDuploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage, limits: {
    fileSize: 1027 * 1024 * 5
}})

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
Router.post("/admission", upload.single('studentID'),(req, res) => {
    console.log(req.file)
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