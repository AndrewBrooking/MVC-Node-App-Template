const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route
  app.get("/api/todos", function(req, res) {
    // ** HANDLE BASIC GET FUNCTIONALITY HERE
  });

  // POST route
  app.post("/api/todos", function(req, res) {
    // ** HANDLE POST FUNCTIONALITY HERE
  });

  // DELETE route
  app.delete("/api/todos/:id", function(req, res) {
    // ** HANDLE DELETE BY ID FUNCTIONALITY HERE
  });

  // PUT route
  app.put("/api/todos", function(req, res) {
    // ** HANDLE PUT FUNCTIONALITY HERE
  });
};