const express = require("express")
const dotenv = require("dotenv");
const morgan = require('morgan')
const path = require('path');
const routes = require("./server/routes/router.js");
const connectDatabase =  require('./server/database/connection.js')
const app = express();




dotenv.config( {path: "config.env"} )
let PORT = process.env.PORT || 3000;
app.use(morgan("tiny"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDatabase()


app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/js", express.static(path.resolve(__dirname, "assets/js")))
app.use("/images", express.static(path.resolve(__dirname, "assets/images")))
app.use("/icons", express.static(path.resolve(__dirname, "assets/icons")))
app.use("/files", express.static(path.resolve(__dirname, "public/files")))
app.set("view engine", "ejs")

app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Server is runniung on PORT ${PORT}`)
})