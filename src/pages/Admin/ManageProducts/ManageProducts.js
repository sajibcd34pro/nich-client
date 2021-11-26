import { CircularProgress, Grid } from '@mui/material';
import React from 'react';


import useAuth from '../../../hooks/useAuth';

import ManageProduct from './ManageProduct/ManageProduct';

const ManageProducts = () => {
    const { setProducts, products, allContexts } = useAuth();
    const { isLoading } = allContexts;
    // const { name, price } = products;
    if (isLoading) {
        return (
            <div className="text-center">
                <h2 className="text-primary">..loading</h2>
                <CircularProgress />
            </div>
        )
    }
    return (
        <div>
            <h1>Manage Products</h1>
            <Grid style={{ backgroundColor: '#eae4d1' }} mt={2} mb={2} container spacing={2}>
                <Grid item xs={3}>
                    <h5>Product</h5>
                </Grid>
                <Grid item xs={3}>
                    <h5>Name</h5>
                </Grid>
                <Grid item xs={3}>
                    <h5>Price</h5>
                </Grid>
                <Grid item xs={3}>
                    <h5>Action</h5>
                </Grid>

            </Grid>
            {
                products.length === 0 && <CircularProgress className="text-center" />
            }
            {
                products.map(product =>
                    <ManageProduct
                        key={product._id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    >

                    </ManageProduct>
                )
            }



        </div>
    );
};

export default ManageProducts;