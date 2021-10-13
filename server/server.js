import express from "express";
import connectDB from './config/db.js'
import cors from 'cors'
import dotenv from 'dotenv'
import apiRoute from './usersRoute/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import usersRoute from './usersRoute/usersRouter.js'

dotenv.config()

connectDB()

const app = express()


// Middleware
app.use(express.json({
    limit: '30mb',
    extended: true
}))

app.use(express.urlencoded({
    limit: '30mb',
    extended: true
}))

app.use(cors())

// ROutes
app.use('/', apiRoute)
app.use('/api/users', usersRoute)


app.use(notFound)

app.use(errorHandler)

// ROutes


app.use('/users', usersRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} `);
})
    