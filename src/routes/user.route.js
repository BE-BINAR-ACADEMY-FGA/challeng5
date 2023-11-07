const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { CheckPostReq } = require("../middleware/middleware");

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *      - "User"
 *     summary: Create User
 *     description: Create new user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              identity_type:
 *                type: string
 *              identity_number:
 *                type: string
 *              address:
 *                type: string
 *     responses:
 *      201:
 *        description: User created successfully
 *      500:
 *        description: Internal server error
 */

router.post("/", CheckPostReq, createUser);

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *      - "User"
 *     summary: Get All User
 *     description: Return list of all user
 *     responses:
 *      200:
 *        description: Users retrieved successfully
 *      404:
 *        description: User not found
 *      500:
 *        description: Internal server error
 */
router.get("/", getAllUser);

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     tags:
 *      - "User"
 *     summary: Get one User
 *     description: Return one user
 *     parameters:
 *      - in: path
 *        name: userId
 *     responses:
 *      200:
 *        description: Users retrieved successfully
 *      404:
 *        description: User not found
 *      500:
 *        description: Internal server error
 */
router.get("/:userId", getUserById);

/**
 * @swagger
 * /users/{userId}:
 *   put:
 *     tags:
 *      - "User"
 *     summary: Update User
 *     description: Update user
 *     parameters:
 *      - in: path
 *        name: userId
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              identity_type:
 *                type: string
 *              identity_number:
 *                type: string
 *              address:
 *                type: string
 *     responses:
 *      200:
 *        description: User updated successfully
 *      404:
 *        description: User not found
 *      500:
 *        description: Internal server error
 */
router.put("/:userId", updateUser);

/**
 * @swagger
 * /users/{userId}:
 *   delete:
 *     tags:
 *      - "User"
 *     summary: Delete One User
 *     description: Delete One user
 *     parameters:
 *      - in: path
 *        name: userId
 *     responses:
 *      200:
 *        description: User deleted successfully
 *      404:
 *        description: User not found
 *      500:
 *        description: Internal server error
 */
router.delete("/:userId", deleteUser);

module.exports = router;
