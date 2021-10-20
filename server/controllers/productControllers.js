import Product from '../modelUsers/productModel.js'
import asyncHandler from 'express-async-handler'

export const getApi =(req, res) => {
    res.send('Api is running...')
}

export const getProductId =asyncHandler(async (req, res) => {
        const products = await Product.find({})
        res.json(products)

   
})

export const getProductById = asyncHandler(async(req, res) => {
        const product = await Product.findById(req.params.id)
    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
 
})
// DELETE
export const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)
if(product) {
  await product.remove()
  res.json({message: 'Product Removed'})
} else {
    res.status(404)
    throw new Error('Product not found')
}

})
// Create
export const createProduct = asyncHandler(async(req, res) => {
    const product = new Product({
        name: 'Sample Name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample Brand',
        category: 'Sample Category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample Description'
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})
// Update
export const updateProduct = asyncHandler(async(req, res) => {
    const {name, price, description, image ,brand, category, countInStock, } = req.body

    const  product = await Product.findById(req.params.id)
    
    if(product) {
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock
        
        const updatedProduct = await product.save()
        res.json(updatedProduct)
  
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
  
})