import { CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import {useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const EditUser = () => {
    const { id } = useParams()
    const [editProducts, setEditProducts] = useState([]);
    const { allContexts } = useAuth();
    const { isLoading } = allContexts;
    
useEffect(() => {
    fetch(`https://aqueous-dusk-98125.herokuapp.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setEditProducts(data));
    }, [id]);

    //name
    function nameHandler(e) {
        const name = e.target.value;
        const modifiedUser = { id: id, name: name, img: editProducts.img, price: editProducts.price };
        setEditProducts(modifiedUser);
    }

    function priceHandler(e) {
        const price = e.target.value;
        const modifiedUser = { id: id, name: editProducts.name, price: price, img:editProducts.img };
        setEditProducts(modifiedUser);
    }
    function imageHandler(e) {
        const image = e.target.value;
        const modifiedUser = { id: id, name: editProducts.name, image: image, price:editProducts.price };
        setEditProducts(modifiedUser);
    }
    
    const updateProducts = (e) => {
        fetch(`https://aqueous-dusk-98125.herokuapp.com/products/${id}` , {
            method: "put",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(editProducts),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                   alert(`Products Edited SuccessFully`)
                   
                }
                else {
                    alert("You don't change any field!")
                }
            });
        e.preventDefault();


    }
    if (isLoading) {
        return <CircularProgress/>
    }

    return (
        <div>
            <h1>Edit Your Products</h1>
            <form onSubmit={updateProducts}>
                <TextField sx={{ width: '50%', m: 1 }} id="outlined-basic" label="Name" variant="outlined"
                    type="text" onChange={nameHandler}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={editProducts.name}
                />
                 <br />
                <TextField sx={{ width: '50%', m: 2, }} label="Image url" type="url" onChange={imageHandler} value={editProducts.img} InputLabelProps={{
                    shrink: true,
                }} />
                 <br />
                <TextField sx={{ width: '50%', m: 1, }} id="outlined-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }} onChange={priceHandler} value={editProducts.price} />
                 <br />
                
                
                
                
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default EditUser;