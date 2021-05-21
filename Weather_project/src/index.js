const express = require('express');
const app = express();

// for using payh module we need to reuqire path
const path = require("path");
// for creating partial we need to  require hbs(handlebars)
const hbs = require("hbs");

// all server has own process.env.port  which is a simple port where our website 
// will be displayed like mysql have its own port 8080

const port = process.env.PORT || 7649;


// second using template files
// for using template engine you must have to create static data
// for create data static express provide us some features like 
// app.set("view engine", "engine_name")

const staticPath = path.join(__dirname,"../public");
const dynamicPath = path.join(__dirname,"../template/views");
const partialPath = path.join(__dirname,"../template/partial"); 

app.set("view engine","hbs");
app.set("views",dynamicPath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

//first we can create pages as per our website
//  routing file

app.get("", (req, res) => {
    res.render("index", {});
});

app.get("/home", (req,res) => {
    res.render("index",{});
})

app.get("/weather", (req,res) => {
    res.render("weather", {});
})

app.get("/about", (req,res) => {
   res.render("about", {});
})

app.get("/*", (req,res) => {
    res.render("404", {});
})


app.listen(port, (req,res) => {
    console.log("server are connect succesfully");
});