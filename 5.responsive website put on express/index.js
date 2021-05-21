const ep = require("express");
const app = ep();
const port = 3820;
const path = require("path");
const absolute_path = path.join(__dirname, "./public");
app.use(ep.static(absolute_path));
app.get("/", (req, res) => {
  res.send("wait we are loading the page");
});
app.listen(port);