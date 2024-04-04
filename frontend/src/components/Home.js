import React, { Fragment, useEffect } from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import MetaData from './layout/MetaData'
import Product from './product/Product'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import Loader from './layout/Loader'

const Home = () => {
    const dispatch = useDispatch()

    const { loading, products, error, productsCount } = useSelector(state => state.products)

    const notify = (error = '') => toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER
    });

    useEffect(() => {
        if(error){
			// return alert.error(error)
            notify(error)
		}
        dispatch(getProducts())
    }, [dispatch, error]);

  return (
    <Fragment>
        {loading ? <Loader /> : (
            <Fragment>
                <MetaData title={'Buy Best Products Online'} />
                <h1 id="products_heading">Latest Products</h1>

                <section id="products" className="container mt-5">
                    <div className="row">
                        {products && products.map(product => (
                            <Product key={product._id} product={product} col={4} />
                        ))}
                     </div>
                </section>
            </Fragment>
        )}
        
    </Fragment>
  )
}

export default Home