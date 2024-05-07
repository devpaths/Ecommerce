const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
} = require("../controller/userCtrl");

const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/allUsers", getallUsers);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getUser);

router.delete("/:id", deleteUser);
router.put("/edit-User/:id", authMiddleware, updateUser);
router.put("/block-User/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-User/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
