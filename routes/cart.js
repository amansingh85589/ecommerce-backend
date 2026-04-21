import express from 'express';
import {
    addToCart,
    removeItem,
    updateQuantity,
    getCart
} from '../controllers/cartController.js';

const router = express.Router();

// Add item to cart
/**
 * @swagger
 * /api/cart/add:
 *   post:
 *     summary: Add item to cart
 *     tags: [Cart]
 */
router.post('/add', addToCart);

// Remove item from cart
/**
 * @swagger
 * /api/cart/remove:
 *   post:
 *     summary: Remove item from cart
 *     tags: [Cart]
 */
router.post('/remove', removeItem);

// Update item quantity in cart
/**
 * @swagger
 * /api/cart/update:
 *   post:
 *     summary: Update cart quantity
 *     tags: [Cart]
 */
router.post('/update', updateQuantity);

// Get user's cart
/**
 * @swagger
 * /api/cart/{userId}:
 *   get:
 *     summary: Get cart by user ID
 *     tags: [Cart]
 */
router.get('/:userId', getCart);

export default router;