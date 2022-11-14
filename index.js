const { EJSON } = require("bson");
const express = require("express");

const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost/todo_list", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}),

//middleware
app.use(express.urlencoded(
    {extended: true}
));

app.use(express.static("public"));
app.set("view engine", "ejs");


//routes

app.use(require ("./routes/route"));
app.use(require ("./routes/todoRoute"));

//server configuration
app.listen(3000, () =>
console.log("Server is listening at port: 3000"))