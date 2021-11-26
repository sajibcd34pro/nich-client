import { CircularProgress, Grid } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import ExploreProduct from './ExploreProduct';

// import ExploreProduct from './ExploreProduct';

const ExploreProducts = () => {
    const { products } = useAuth();
    
    return (
        <div className="container" style={{marginTop:'4%'}}>
            {
                products.length === 0 &&  <CircularProgress className="text-center" /> 
            }
            <h2 className="text-center mb-4">Our Valuable Products</h2>
            <Grid container spacing={2}>
                {products.map(product => 
                    <ExploreProduct product={product}
                    key={product._id}
                    ></ExploreProduct>
                )}
                
            </Grid>
        </div>
    );
};

export default ExploreProducts;