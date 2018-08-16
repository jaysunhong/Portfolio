var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

require("./routing/htmlRoutes.js")(app);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT
  );
});

module.exports = app;