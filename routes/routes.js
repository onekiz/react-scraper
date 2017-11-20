const router = require("express").Router();
const eventsController = require("../controllers/eventsController");
const userController = require("../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .get(///function )
  .post(//database functoin);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(//database funciton)
  .put(//database function)
  .delete(//database function);

module.exports = router;
