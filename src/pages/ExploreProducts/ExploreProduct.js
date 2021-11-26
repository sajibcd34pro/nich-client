import React from 'react';
import { CircularProgress, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const ExploreProduct = ({product}) => {
    const { name, price, img, _id } = product;
    const { allContexts } = useAuth();
    const { isLoading } = allContexts;

    if (isLoading) {
        return <CircularProgress/>;
}

    return (
        <>
            <Grid className="text-center" mt={4} item xs={12} md={6} lg={4}>
                <div className="pb-5" style={{height:"30rem"}}>
                    <img className="img-fluid" src={img} alt="Card" style={{ height: "20rem" }}/>
                    <div className ="card-body">
                        <h5 className="card-text"> {name} </h5>
                         <h6>Price: $ {price} </h6>
                    </div>
                    <Link to={`/products/${_id}`}> <Button variant="contained">Purchase Now</Button></Link>
                </div>
            </Grid>
              
        </>
    );
};

export default ExploreProduct;