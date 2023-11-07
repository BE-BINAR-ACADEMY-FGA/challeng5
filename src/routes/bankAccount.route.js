const express = require("express");
const router = express.Router();
const {
  createBankAccount,
  getAllBankAccounts,
  getBankAccontById,
  updateBankAccounts,
  deleteBankAccount,
  depositBalance,
  withdrawBalance,
} = require("../controllers/bank_account.controller");
const {
  CheckPostAccountReq,
  CheckDepositWithdraw,
} = require("../middleware/middleware");

/**
 * @swagger
 * /accounts:
 *   post:
 *     tags:
 *      - "Bank Account"
 *     summary: Create Bank Account
 *     description: Create new bank account
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              user_id:
 *                type: number
 *              bank_name:
 *                type: string
 *              bank_account_number:
 *                type: string
 *              balance:
 *                type: number
 *                default: 0
 *     responses:
 *      201:
 *        description: Bank account created successfully
 *      400:
 *        description: Bad request
 *      500:
 *        description: Internal server error
 */
router.post("/", CheckPostAccountReq, createBankAccount);

/**
 * @swagger
 * /accounts:
 *   get:
 *     tags:
 *      - "Bank Account"
 *     summary: Get All Bank Accounts
 *     description: Return list of all bank accounts
 *     responses:
 *      200:
 *        description: Bank accounts retrieved successfully
 *      404:
 *        description: Bank account not found
 *      500:
 *        description: Internal server error
 */
router.get("/", getAllBankAccounts);

/**
 * @swagger
 * /accounts/{accountsId}:
 *   get:
 *     tags:
 *      - "Bank Account"
 *     summary: Get One Bank Account
 *     description: Return one bank account
 *     parameters:
 *      - in: path
 *        name: accountsId
 *        schema:
 *          type: number
 *        required: true
 *        description: Bank account id
 *     responses:
 *      200:
 *        description: Bank account retrieved successfully
 *      404:
 *        description: Bank account not found
 *      500:
 *        description: Internal server error
 *
 */
router.get("/:accountsId", getBankAccontById);

/**
 * @swagger
 * /accounts/{accountsId}:
 *   put:
 *     tags:
 *      - "Bank Account"
 *     summary: Update Bank Account
 *     description: Update bank account
 *     parameters:
 *      - in: path
 *        name: accountsId
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              user_id:
 *                type: number
 *              bank_name:
 *                type: string
 *              bank_account_number:
 *                type: string
 *    responses:
 *      201:
 *        description: Bank account created successfully
 *      400:
 *        description: Bad request
 *      500:
 *        description: Internal server error
 */
router.put("/:accountsId", updateBankAccounts);

/**
 * @swagger
 * /accounts/{accountsId}:
 *   delete:
 *     tags:
 *      - "Bank Account"
 *     summary: Delete one Bank Account
 *     description: Delete one bank account
 *     parameters:
 *      - in: path
 *        name: accountsId
 *     responses:
 *      201:
 *        description: Bank account deleted successfully
 *      400:
 *        description: Bad request
 *      500:
 *        description: Internal server error
 */
router.delete("/:accountsId", deleteBankAccount);

/**
 * @swagger
 * /accounts/deposit/{accountsId}:
 *   put:
 *     tags:
 *      - "Bank Account"
 *     summary: Deposit Balance
 *     description: Deposit balance
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              amount:
 *                type: number
 *                example: 100
 *     responses:
 *      201:
 *        description: Deposit successfully
 *      500:
 *        description: Internal server error
 */

router.put("/deposit/:accountsId", CheckDepositWithdraw, depositBalance);

/**
 * @swagger
 * /accounts/withdraw/{accountsId}:
 *   put:
 *     tags:
 *      - "Bank Account"
 *     summary: Withdraw Balance
 *     description: Withdraw balance
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              amount:
 *                type: number
 *                example: 100
 *     responses:
 *      201:
 *        description: Withdraw successfully
 *      500:
 *        description: Internal server error
 */

router.put("/withdraw/:accountsId", CheckDepositWithdraw, withdrawBalance);

module.exports = router;
