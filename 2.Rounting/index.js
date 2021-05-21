/* 
! challange 1
* here we have a port number localhost:6464/ 
TODO: and we are performing some operation and add page in it like
? about- welcome to about pagge
? feedback- welcome to feedback page
? contact - welcome to feedback pagge
? team - welcome to team page
? home- welcome to home page
? index- welcome to index page 
*/

const express = require("express");
const app = express();

app.get("/", (req,res)=> {
    res.status(103).send("wkdjeidioeheiowdhei");
});

app.get("/home",(req,res) => {
    res.status(200).send("Welcome to home page");
});

app.get("/aboutus",(req,res) => {
    res.status(200).send("Welcome to aboutus page");
});

app.get("/contact",(req,res) => {
    res.status(200).send("Welcome to contact page");
});

app.get("/*",(req,res) => {
    res.status(404).send("hiiden page");
});

app.listen(3729, () => {
    console.log("done");
});
// or
// app.listen(2738);