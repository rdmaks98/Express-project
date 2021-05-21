
const ep = require("express");
const ap = ep();
const path = require("path");
const hbs = require("hbs");
const chalk = require("chalk");
const port = 4589;

const absl_path = path.join(__dirname,"../public");
const patl_path =path.join(__dirname,"../template/partial");
const tepl_path = path.join(__dirname,"../template/views");

ap.set("view engine", "hbs");
ap.set("views", tepl_path);
hbs.registerPartials(patl_path);
ap.use(ep.static(absl_path));

ap.get("", (req,res) => {
    res.render("home", {
        header_image: "shop.svg",
        primaryText: "Welcome To",
        PrimaryColorText: "Home",
    });
}); 

ap.get("/home", (req,res) => {
    res.render("home",
    {
        header_image: "shop.svg",
        primaryText: "Welcome To",
        PrimaryColorText: "Home",
    });
});

ap.get("/man", (req,res) => {
    res.render("man",{
        header_image: "man.svg",
        primaryText: "Welcome To",
        PrimaryColorText: "Men's",
        name : "shirt",
        name1 : "tshirt",
        name2 : "pant",
        name3 : "servani",
        name4 : "suits",
        name5 : "jeans",
        primary1 : "mans.jpg",
        primary2 : "mans.jpg",
        primary3 : "mans.jpg",
        primary4 : "mans.jpg",
        primary5 : "mans.jpg",
        primary6 : "mans.jpg",
        price : "200",
        price1 : "300",
        price3 : "400",
        price4 : "500",
        price5 : "600",
    });
});

ap.get("/bags", (req,res) => {
    res.render("bags",{
        header_image: "bags.svg",
        primaryText: "Welcome To",
        PrimaryColorText: "bag's",
        name : "leather",
        name1 : "cotten",
        name2 : "bag2",
        name3 : "bag3",
        name4 : "bag4",
        name5 : "bag5",
        primary1 : "b1.png",
        primary2 : "b2.png",
        primary3 : "b3.png",
        primary4 : "b4.png",
        primary5 : "b5.png",
        primary6 : "b6.png",
        price : "200",
        price1 : "300",
        price3 : "400",
        price4 : "500",
        price5 : "600",
    });
});

ap.get("/watch", (req,res) => {
    res.render("watch",{
        header_image: "watch.svg",
        primaryText: "Welcome To",
        PrimaryColorText: "watch",
        name : "rolex",
        name1 : "rado",
        name2 : "lamex",
        name3 : "digital",
        name4 : "titan",
        name5 : "latest",
        primary1 : "w1.png",
        primary2 : "w2.png",
        primary3 : "w3.png",
        primary4 : "w4.png",
        primary5 : "w5.png",
        primary6 : "w6.png",
        price : "200",
        price1 : "300",
        price3 : "400",
        price4 : "500",
        price5 : "600",
    });
});

ap.get("/woman", (req,res) => {
    res.render("woman",{
        header_image: "woman.svg",
        primaryText: "Welcome To",
        PrimaryColorText: "Woman's",
        name : "dresses",
        name1 : "kurti",
        name2 : "lehngha",
        name3 : "saree",
        name4 : "punjabi",
        primary1 : "woman.jpg",
        primary2 : "woman.jpg",
        primary3 : "woman.jpg",
        primary4 : "woman.jpg",
        primary5 : "woman.jpg",
        primary6 : "woman.jpg",
        name5 : "gown",
        price : "200",
        price1 : "300",
        price3 : "400",
        price4 : "500",
        price5 : "600",
        
    });
});

ap.get("/kids", (req,res) => {
    res.render("kids",{
        header_image: "kids.svg",
        primaryText: "Welcome To",
        PrimaryColorText: "kid's",
        name : "shorts",
        name1 : "baby frock",
        name2 : "jeans",
        name3 : "T-shirt",
        name4 : "babysuit",
        name5 : "latest",
        primary1 : "kids.svg",
        primary2  :"kids.svg",
        primary3 : "kids.svg",
        primary4 : "kids.svg",
        primary5 : "kids.svg",
        primary6 : "kids.svg",
        price : "200",
        price1 : "300",
        price3 : "400",
        price4 : "500",
        price5 : "600",
    });
});

ap.get("/*" ,(req,res) => {
    res.render("404");
});


ap.listen(port, () => {
    console.log("succesfully load");
});



// example
/* app.get("/home", (req, res) => {
    res.render("home", {
      header_image: "shop.svg",
      primaryText: "Welcome To",
      PrimaryColorText: "Home",
    });
  });
  app.get("/man", (req, res) => {
    res.render("man", {
      header_image: "man.svg",
      primaryText: "Welcome To",
      PrimaryColorText: "Men's",
    });
  });
  app.get("/women", (req, res) => {
    res.render("women", {
      header_image: "women_two.svg",
      primaryText: "Welcome To",
      PrimaryColorText: "Women's",
      b1: "b1.png",
      content: "leather ",
    });
  });
  app.get("/watch", (req, res) => {
    res.render("watch", {
      header_image: "watch.svg",
      primaryText: "Welcome To",
      PrimaryColorText: "Watch",
    });
  });
  app.get("/bags", (req, res) => {
    res.render("bags", {
      header_image: "bags.svg",
      primaryText: "Welcome To",
      PrimaryColorText: "Bag's",
    });
  });
  app.get("/kids", (req, res) => {
    res.render("kids", {
      header_image: "kids.svg",
      primaryText: "Welcome To",
      PrimaryColorText: "Kid's",
    });
  });
  app.get("*", (req, res) => {
    res.render("404", {
      header_image: "404.svg",
      primaryText: "404",
      PrimaryColorText: "No Available",
    });
  }); */