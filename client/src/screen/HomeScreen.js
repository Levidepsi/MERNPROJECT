import React, { useEffect } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../component/Product'
import Message from '../component/Message'
import Loader from '../component/Loader'
import {listProducts} from '../actions/productActions'


const HomeScreen = ({id}) => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList  )
    const { loading, error, products } =  productList

    useEffect(() => {
       dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1 style={{ marginTop: '20px' }} >Latest products</h1>
            {loading ? <Loader/> : error ? <Message variant='danger'/> :
            
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row> 
            }
            
        </>
    )
}

export default HomeScreen
