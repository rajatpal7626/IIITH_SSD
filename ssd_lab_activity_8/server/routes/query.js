const { query } = require("express");
const requireAuth = require("../middlewares/requireAuth");
var router = require("express").Router();
const queryController = require("../controllers/feedback.controller");

// Create a new Tutorial
router.post("/", queryController.create);
  
// Retrieve all Tutorials
router.get("/", queryController.findAll);
  
// Retrieve a single Tutorial with id
router.get("/:id", queryController.findOne);
  
// Update a Tutorial with id
router.put("/:id", queryController.update);
  
// Delete a Tutorial with id
router.delete("/:id", queryController.delete);
  
// Create a new Tutorial
router.delete("/", queryController.deleteAll);
  
module.exports = router;