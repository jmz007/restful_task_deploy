// ******************  Configuration  ******************
var express = require("express");
var app = express();
var port = 8000;
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var morgan = require("morgan");
// *****************************************************



// *****************  Express Setting  *****************
// app.use(express.static(path.join(__dirname, "./static")));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./../public/dist")));
app.set("views", path.join(__dirname, "./views"));
app.use(bodyParser.json());
// *****************************************************



// *****************  Mongoose Setting  ****************
mongoose.connect("mongodb://localhost/my_task");
require("./models/task");
mongoose.Promise = global.Promise;
// *****************************************************



// *********************  Routing  *********************
require("./config/routes")(app);
// *****************************************************



// ********************  Server Up  ********************
app.listen(port, function () {
    console.log("listening on port " + port);
});
// *****************************************************
