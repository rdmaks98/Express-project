// A template engine enables you to use static template files in your application.
// At runtime, the template engine replaces variables in a template file with actual values
//, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
// we are using here handlebars because it is similar to html css and js user can use it very easily
const ep = require("express");
const ap = ep();
const path = require("path");
const port= 2312;

const absl_path = path.join(__dirname,'./public');

ap.set("view engine","hbs");
// app.set("view engine", "pug");
// app.set("view engine", "ejs");
// app.set("view engine", "mustache");
ap.use(ep.static(absl_path));

ap.get("/" ,(req,res) => {
    res.render("index",
    {
        FIRST_NAME:"All Categories",
        category:"musical instument",
        alistyle_img:"logo.png",
        city:"india country",
    });
});

ap.get("/" , (req,res) => {
    res.send("welcome to the page");
});

ap.listen(port);