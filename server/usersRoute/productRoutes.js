import express from 'express'
import { getApi, getProductId, getProductById, deleteProduct, createProduct, updateProduct } from '../controllers/productControllers.js'
import {protect, admin} from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', getApi )

router.get('/api/products', getProductId)
router.post('/api/products',protect, admin, createProduct)

router.get('/api/products/:id', getProductById  )
router.delete('/api/products/:id', protect, admin,  deleteProduct  )
router.put('/api/products/:id', protect, admin,  updateProduct  )

export default router