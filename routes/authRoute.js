const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controller/userCtrl");

const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/allUsers", getallUsers);
router.get("/:id", authMiddleware, getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
module.exports = router;
