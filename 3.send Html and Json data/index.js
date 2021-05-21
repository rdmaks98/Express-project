const express = require("express");
const app = express();
const port = 1234;
app.get("/", (req, res) => {
  res.send('<h1 style="color:red;font-size:20px;">Hello this is html and json format data</h1>');
});

app.get("/json", (req, res) => {
    res.send([
      {
        semester: "third",
        percentile: "82.39",
      },
      {
        semester: "fouth",
        skills: undefined,
      },
    ]);
  });

app.get("/api", (api,data) => {
  data.json([
    {
      semester:"first",
      percentile:"38.38",
    },
    {
      semester:"second",
      percentile:null,
    },
  ])
})
  app.listen(port);