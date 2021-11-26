import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageProduct = ({ product, setProducts, products }) => {
    
    // const [success, setSuccess] = useState(false)
    const { name, price, img, _id } = product;
 
    // delete data from api

    const handleDelete = (id) => {
        const url = `https://aqueous-dusk-98125.herokuapp.com/products/${id}`;
        console.log(url)
        axios.delete(url)
            .then((res) => {
                if (res.data?.deletedCount > 0) {
                    const remainingAllProducts = products.filter(
                        (product) => product._id !== id
                    );
                    setProducts(remainingAllProducts);
                    alert('product deleted successfully')
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });

     }   

    
       
   

    return (
        <div>
            <Grid className="card" container spacing={2}>
                <Grid mb={2} item xs={3}>
                    <img src={img} style={{ width: '50px' }} alt="" />

                </Grid>

                <Grid mb={2} item xs={3}>
                    <h5>{name}</h5>
                </Grid>

                <Grid mb={2} item xs={3}>
                    <h5> {price}$ </h5>
                </Grid>
                <Grid mb={2} item xs={3}>
                    <Link to={`/Dashboard/${_id}`}> <button className="btn btn-success"><i className="fas fa-edit"></i></button> </Link>
                    <button className="btn btn-danger"
                        onClick={() => handleDelete(_id)}><i className="fas fa-trash"></i></button>
                </Grid>

            </Grid>
        </div>
    );
};

export default ManageProduct;