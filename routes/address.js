import express from 'express';
import {saveAddress,getAddresses} from '../controllers/addressController.js';

const router = express.Router();


/**
 * @swagger
 * /api/address/add:
 *   post:
 *     summary: Save address
 *     tags: [Address]
 */
router.post('/add', saveAddress);

/**
 * @swagger
 * /api/address/{userId}:
 *   get:
 *     summary: Get user addresses
 *     tags: [Address]
 */
router.get('/:userId', getAddresses);

export default router;