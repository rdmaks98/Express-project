// ! what is express
// express is node js framework its the most popular framework as of now (the most statted on npm) 
// expressjs is a web application framework that provides you with a simple API to build websites web apps and back ends.
// WHY DO WE ACTUALLY NEED EXPRESS js
// try to write a small REST API server in plain node js that is using only core modules and then in express the latter will take you 5-10x less time and lines of code.
// to use express you have to preform this command 
// npm init -y
// npm install express

const express = require("express");
const app = express();

app.get("/", (req,res)=> {
    res.status(103).send("express call");
});

app.get("/home",(req,res) => {
    res.status(200).send("Welcome to home page");
});

app.listen(3488, () => {
    console.log("done");
});
// or
// app.listen(2738);