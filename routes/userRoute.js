const express = require("express");
const userContoller = require("../controllers/userController");

const router = express.Router();

router.route("/").get(userContoller.getAllUsers).post(userContoller.createUser);
router
  .route("/:userId")
  .get(userContoller.getUser)
  .patch(userContoller.updateUser)
  .delete(userContoller.deleteUser);

module.exports = router;
