
import express from 'express'
import { getApi, getApiId, getApiOneId } from '../controllers/apiControllers.js'

const router = express.Router()

router.get('/', getApi )

router.get('/api/products', getApiId)

router.get('/api/products/:id', getApiOneId)

export default router