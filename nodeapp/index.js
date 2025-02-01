var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send(' hellow world! I am DevOps Engineer ');
});

app.get("/will", function (req, res) {
  res.send(' Hello How are you ');
});
app.get("/ready", function (req, res) {
  res.send('  Great!, It works! ');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000!");
});

module.exports = app;
