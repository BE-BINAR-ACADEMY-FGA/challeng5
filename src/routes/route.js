const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
const bankAccountRoute = require("./bankAccount.route");
const transactionRoute = require("./transactions.route");
const authRoute = require("./auth.route");

router.use("/v1/users", userRoute);
router.use("/v1/accounts", bankAccountRoute);
router.use("/v1/transactions", transactionRoute);
router.use("/v1/auth", authRoute);

module.exports = router;
