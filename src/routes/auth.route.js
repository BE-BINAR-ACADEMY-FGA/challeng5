const express = require("express");
const router = express.Router();
const {
  register,
  login,
  authenticate,
} = require("../controllers/auth.controller");
const { CheckRegister } = require("../middleware/middleware");

router.post("/register", CheckRegister, register);
router.post("/login", login);
router.get("/authenticate", authenticate);

module.exports = router;
