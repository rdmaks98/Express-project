const ep = require("express");
const ap = ep();
const port = "4879";
const path = require("path");

/* 
! in express we have two types of path 
? 1. Relative Path(../../../){back back back back}
? 2. Absolute Path(__dirname,"../"){direct put url}
*/

const absolute_path = path.join(__dirname, "./public");
ap.use(ep.static(absolute_path));
ap.get("/", (req, res) => {
  res.send("wait we are loading the page");
});
ap.listen(port);
