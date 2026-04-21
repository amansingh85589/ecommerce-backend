import express from 'express';
import { signupUser, loginUser } from '../controllers/authController.js';

const router = express.Router();


/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Aman
 *             email: aman@gmail.com
 *             password: 123456
 *     responses:
 *       200:
 *         description: User registered successfully
 */
router.post('/signup', signupUser);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: aman@gmail.com
 *             password: 123456
 *     responses:
 *       200:
 *         description: Login successful
 */

router.post('/login', loginUser);

export default router;