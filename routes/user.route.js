const express = require("express");
const router = express.Router();
var cors = require('cors')

router.use(cors())


const user_controller = require("../controllers/user.controller.js");

router.get("/test",cors(), user_controller.test);
router.post("/create",cors(), user_controller.user_create);
router.get("/:id",cors(), user_controller.user_details);
router.put("/:id/update",cors(), user_controller.user_update);
module.exports = router;
