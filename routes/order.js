import express from 'express';
import { placeOrder } from '../controllers/orderController.js';

const router = express.Router();
/**
 * @swagger
 * /api/order/place:
 *   post:
 *     summary: Place order
 *     tags: [Order]
 */

router.post('/place', placeOrder);

export default router;