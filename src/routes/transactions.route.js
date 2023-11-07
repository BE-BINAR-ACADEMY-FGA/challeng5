const express = require("express");
const router = express.Router();
const {
  transferMoney,
  getAllTransactions,
  getTransactionById,
} = require("../controllers/transactions.controller");

/**
 * @swagger
 * /transactions:
 *   post:
 *     tags:
 *      - "Transactions"
 *     summary: Create Transaction
 *     description: Create new transaction
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              source_account_id:
 *                type: number
 *              destination_account_id:
 *                type: number
 *              amount:
 *                type: number
 *     responses:
 *      201:
 *        description: Transaction created successfully
 *      500:
 *        description: Internal server error
 */

router.post("/", transferMoney);

/**
 * @swagger
 * /transactions:
 *   get:
 *     tags:
 *      - "Transactions"
 *     summary: Get All Transactions
 *     description: Return list of all transactions
 *     responses:
 *      200:
 *        description: Transactions retrieved successfully
 *      404:
 *        description: Transactions not found
 *      500:
 *        description: Internal server error
 */
router.get("/", getAllTransactions);

/**
 * @swagger
 * /transactions/{transactionId}:
 *   get:
 *     tags:
 *      - "Transactions"
 *     summary: Get One Transaction
 *     description: Return list of all transactions
 *     parameters:
 *      - in: path
 *        name: transactionId
 *     responses:
 *      200:
 *        description: Transaction retrieved successfully
 *      404:
 *        description: Transaction not found
 *      500:
 *        description: Internal server error
 */
router.get("/:transactionId", getTransactionById);

module.exports = router;
