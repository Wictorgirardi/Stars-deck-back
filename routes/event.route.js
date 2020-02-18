const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const event_controller = require("../controllers/event.controllers.js");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", event_controller.test);
router.post("/create", event_controller.product_create);
router.get("/:id", event_controller.product_details);
router.put("/:id/update", event_controller.product_update);
module.exports = router;
