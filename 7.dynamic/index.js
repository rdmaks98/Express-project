const ep = require("express");
const ap = ep();
const port = 2918;
const path = require("path");
const chalk = require("chalk");

const absl_path = path.join(__dirname,"./public");
const dynm_path = path.join(__dirname,"./dynamic");
ap.set("view engine","hbs");
ap.set("views",dynm_path);
ap.use(ep.static(absl_path));

ap.get("/" ,(req,res) => {
    res.render("index",
    {
        first_name:"All Categories",
        category:"musical instrument",
        alistyle_img:"logo.png",
        city:"indian product",
    });
});

app.get("/feedback", (req, res) => {
    res.render("about", {
      FIRST_LOGO_NAME: "IT",
      ILLUSTRATOR_IMAGE: "feedback.svg",
      SECOND_LOGO_NAME: "VMH",
      SEASON_SALE: "welcome to ",
      SEASON_SALE_DARK: " Feedback ",
      SEASON_SALE_REMAINING: "Page",
    });
  });
  
  app.get("/*", (req, res) => {
    res.render("about", {
      FIRST_LOGO_NAME: "IT",
      ILLUSTRATOR_IMAGE: "404 Error.svg",
      SECOND_LOGO_NAME: "VMH",
      SEASON_SALE: " sorry users ",
      SEASON_SALE_DARK: " 404 ERROR ",
      SEASON_SALE_REMAINING: "Page",
    });
  });
  
ap.get("/", (client, server) => {
    server.send("welcome to the templeate engine tutorial");
  });

ap.listen(port),() =>{
    console.log(chalk.green("successfuly load"));
};