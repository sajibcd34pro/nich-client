import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post(`https://aqueous-dusk-98125.herokuapp.com/products`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Service Added Successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-product container">



            <div className="card card-style text-white bg-dark mb-3" style={{ maxWidth: "50rem" }}>
                <div className="card-header"><h3 className="text-center">Please Add New Product</h3></div>
                <div className="card-body">
                    <form className="mb-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
                        <input  {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <input required type="number" {...register("price")} placeholder="Price" />
                        <input required {...register("img")} placeholder="img url" />
                        <input type="submit" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default AddProduct;