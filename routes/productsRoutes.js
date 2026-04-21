import express from 'express';
import {
 createProduct,
 getProducts,
 updateProduct,
 deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

// Route to create a new product

/**
 * @swagger
 * /api/products/add:
 *   post:
 *     summary: Add product (Admin)
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: Shoes
 *             price: 999
 *             category: fashion
 *             stock: 10
 */
router.post('/add', createProduct);

// Route to get all products


/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 */
router.get('/', getProducts);




// Route to update a product by ID
/**
 * @swagger
 * /api/products/update/{id}:
 *   put:
 *     summary: Update product
 *     tags: [Products]
 */

router.put('/update/:id', updateProduct);

// Route to delete a product by ID

/**
 * @swagger
 * /api/products/delete/{id}:
 *   delete:
 *     summary: Delete product
 *     tags: [Products]
 */
router.delete('/delete/:id', deleteProduct);

export default router;