var path = require("path");

// Routes
module.exports = function(app) {

  // route loads handlebars index file
  app.get("/", function(req, res) {
    res.render("index", null);
  });

};