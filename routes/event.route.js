const express = require("express");
const router = express.Router();
var cors = require('cors')

 
app.use(cors())
 

// Require the controllers WHICH WE DID NOT CREATE YET!!
const event_controller = require("../controllers/event.controllers.js");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test",cors(), event_controller.test);
router.post("/create",cors(), event_controller.product_create);
router.get("/:id",cors(), event_controller.product_details);
router.put("/:id/update",cors(), event_controller.product_update);
module.exports = router;
