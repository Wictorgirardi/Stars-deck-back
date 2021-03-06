const express = require("express");
const router = express.Router();



const user_controller = require("../controllers/user.controller.js");

router.get("/test", user_controller.test);
router.post("/create", user_controller.user_create);
router.get("/:id", user_controller.user_details);
router.put("/:id/update", user_controller.user_update);
module.exports = router;
