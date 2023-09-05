const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const validateUser = require("../middleware/userValidation"); //when we use (..) ????

router.post("/",validateUser, userController.addUser);
router.get("/:name", userController.getUsersByName);
router.patch("/", userController.updateUser);
router.delete("/:name", userController.deleteUser);


module.exports = router;
