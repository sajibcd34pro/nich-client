import { Button, CircularProgress, Grid } from '@mui/material';
import React from 'react';

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ExploreProduct from '../../pages/ExploreProducts/ExploreProduct';

const HomeProducts = () => {
    const { products,allContexts } = useAuth();
    const { isLoading } = allContexts;
    if (isLoading) {
        return (
            <div className="text-center">
                <h2 className="text-primary">..loading</h2>
                <CircularProgress />
            </div>
        )
    }
    return (
        <div id="homeExp" className="container" style={{marginTop:'3%'}}>
            <h2 className="text-center">Our Valuable Products</h2>
            <Grid sx={{ marginTop: '2%' }} className="container" container spacing={2}>
                {
                    !products && <div className="text-center">
                        <h2 className="text-primary">..loading</h2>
                        <CircularProgress />
                    </div>
                }
                {products.slice(0, 6).map(product =>
                    <ExploreProduct product={product}
                        key={product._id}
                    ></ExploreProduct>
                )}
            </Grid>
            <div className="text-center m-5">
                <Link to="/explore"><Button variant="contained">Explore All </Button> </Link>
            </div>
        </div>
    );
};

export default HomeProducts;