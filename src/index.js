const express = require("express");
const ap = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 2810;

const static_path = path.join(__dirname,"../public");
const dynamic_path = path.join(__dirname,"../template/views");
const partial_path = path.join(__dirname,"../template/partial");

ap.set("view engine","hbs");
ap.set("views",dynamic_path);

hbs.registerPartials(partial_path);
ap.use(express.static(static_path));

ap.get("", (req,res) => {
    res.render("index", {});
});

ap.get("/about", (req,res) => {
    res.render("about", {});
});

ap.get("/weather", (req,res) => {
    res.render("weather");
});

ap.get("*", (req,res) => {
    res.render("404");
});
ap.listen(port, () => {
    console.log("server done");
});