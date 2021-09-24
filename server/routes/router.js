const Router = require('express').Router()
const {Admission, Courses} = require('../model/student.admission.js')
const Message = require('../model/message.js')
const { restart } = require('nodemon')
let multer = require('multer')

// Multer Config
// const upload = multer({dest:"public/files"})

let multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      let ext = file.mimetype.split("/")[1];
      cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    },
  });


  let multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "pdf" || file.mimetype.split("/")[1] === "jpeg" || file.mimetype.split("/")[1] === "jpg" || file.mimetype.split("/")[1] === "pdf"){
      cb(null, true);
    } else {
      cb(new Error("Not a valid file. Upload jpg, png or pdf."), false);
    }
  };

  let upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  });



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

Router.post("/admission", upload.single('studentID'), (req, res) => {

    const newAdmission = new Admission({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        gender:req.body.gender,
        dob:req.body.dob,
        city:req.body.city,
        state:req.body.state,
        zipcode:req.body.zipcode,
        country:req.body.country,
        classtime:req.body.classtime,
        contactnumber:req.body.contactnumber,
        parentscontactnumber:req.body.parentscontactnumber,
        courses:new Courses(
            {
                course1:req.body.course1, 
                course2:req.body.course2, 
                course3:req.body.course3, 
                course4:req.body.course4,
                course5:req.body.course5,
                course6:req.body.course6,
                course7:req.body.course7,
                course8:req.body.course8,
                course9:req.body.course9
            },
            // {course2:req.body.course2},
            // {course3:req.body.course3},
            // {course4:req.body.course4},
            // {course5:req.body.course5},
            // {course6:req.body.course6},
            // {course7:req.body.course7},
            // {course8:req.body.course8},
            // {course9:req.body.course9}
        ),
        studentID:req.file.filename,
        agree:req.body.agree,
    })
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
    }).sort({createdAt:-1})
})

Router.get("/messages/:id", (req, res) => {
    Message.findByIdAndDelete(req.params.id)
    .then((result, err) => { 
        if(err){
            res.send("<h1>Opps! Page not found!</h1>")
        }else{
            res.redirect("/messages")
        }
    }).catch(err =>  console.log(err))
})

Router.get("/messages/clear_inbox", (req, res) => {
    Message.deleteMany({}, (err) => {
        if(err){
            res.send("<h1>Opps! Page not found!</h1>")
        }else{
            res.redirect("/messages")
        }
    })
    
})

Router.get('/students', (req, res) => {
    Admission.find({}, (err, data) => {
        if(err){
            res.send("<h1>Oops! Page not found!</h1>")
            console.log(err)
        }else{
            res.render('include/students', {data})
        }
    })
})

Router.get("/students/delete/:id", (req, res) => {
    Admission.findByIdAndDelete(req.params.id)
    .then((result, err) => { 
        if(err){
            res.send("<h1>Opps! Page not found!</h1>")
        }else{
            res.redirect("/students")
        }
    }).catch(err =>  console.log(err))
})

module.exports = Router