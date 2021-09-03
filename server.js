const express = require("express")
const dotenv = require("dotenv");
const morgan = require('morgan')
const path = require('path');
const routes = require("./server/routes/router.js");
const bodyParser = require('body-parser')
var http = require('http'); //importing http

function startKeepAlive() {
    setInterval(function() {
        var options = {
            host: 'your_app_name.herokuapp.com',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }, 20 * 60 * 1000); // load every 20 minutes
}

startKeepAlive();
const connectDatabase =  require('./server/database/connection.js')
const app = express();

dotenv.config( {path: "config.env"} )
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("tiny"))
connectDatabase()
app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/js", express.static(path.resolve(__dirname, "assets/js")))
app.use("/images", express.static(path.resolve(__dirname, "assets/images")))
app.use("/icons", express.static(path.resolve(__dirname, "assets/icons")))
app.use("/IDuploads", express.static(path.resolve(__dirname, "IDuploads")))
app.set("view engine", "ejs")

app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Server is runniung on PORT ${PORT}`)
})