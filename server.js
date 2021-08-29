const express = require("express")
const dotenv = require("dotenv");
const morgan = require('morgan')
const path = require('path');
const route = require("./server/routes/router.js");

const connectDatabase =  require('./server/database/connection.js')
const app = express();

dotenv.config( {path: "config.env"} )
let PORT = process.env.PORT || 3000;

app.use(morgan("tiny"))
connectDatabase()
app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/js", express.static(path.resolve(__dirname, "assets/js")))
app.use("/images", express.static(path.resolve(__dirname, "assets/images")))
app.use("/icons", express.static(path.resolve(__dirname, "assets/icons")))
app.set("view engine", "ejs")

app.use('/', route)

app.listen(PORT, () => {
    console.log(`Server is runniung on PORT ${PORT}`)
})