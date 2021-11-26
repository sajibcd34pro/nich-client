import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.jpg';
const NotFound = () => {
    return (
        <>
        <div style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.109), rgba(0, 0, 0, 0.137)), url(${notFound})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            width: "100%",
            height:"150vh"
        }}>
                <div style={{display:'flex', justifyContent:'center', paddingTop:'30%'}}>
                    <Link to="/home"> <Button variant="contained">Back</Button>
                    </Link>
                </div>
        </div>

        </>
    );
};

export default NotFound;