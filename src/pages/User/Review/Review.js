import { CircularProgress } from '@mui/material';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';



const Review = () => {
    
    const [value, setValue] = React.useState(4);
    const [hover, setHover] = React.useState(-1);
    const { allContexts } = useAuth();
    const { user , isLoading } = allContexts;
    const { register, handleSubmit, reset,} = useForm();
    const onSubmit = data => {
        data.rating = value;
        
        axios.post(`https://aqueous-dusk-98125.herokuapp.com/review`, data)
            .then(res => {
               
                if (res.data.insertedId) {
                    alert('Your review Added Successfully');
                    reset();
                }
            })
    }


    if (isLoading) {
        return <CircularProgress/>
    }
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    return (
        <div className="container">



            <div className="card card-style text-dark mb-3" style={{ maxWidth: "50rem" }}>
                <div className="card-header"><h3 className="text-center">Give A Feedback</h3></div>
                <div className="card-body">
                    <form className="mb-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
                        <input  {...register("name",)} placeholder="Name" defaultValue={user.displayName} />
                        <br/>
                        <Box
                            sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                                margin: '0 auto'
                            }}
                        >
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        </Box>
                        <br/>
                        <input {...register("rating")} value={value} />
                        <textarea required {...register("Description",)} placeholder="Description" />
                      
                        
                        <input type="submit" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Review;