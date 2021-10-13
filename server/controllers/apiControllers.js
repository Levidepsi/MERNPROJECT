import Product from '../modelUsers/productModel.js'
import asyncHandler from 'express-async-handler'

export const getApi =(req, res) => {
    res.send('Api is running...')
}

export const getApiId =asyncHandler(async (req, res) => {
        const products = await Product.find({})
        res.json(products)

   
})

export const getApiOneId = asyncHandler(async(req, res) => {
        const product = await Product.findById(req.params.id)
    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
 
})