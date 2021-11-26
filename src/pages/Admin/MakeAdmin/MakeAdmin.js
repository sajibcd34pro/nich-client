import { Alert, TextField, Button} from '@mui/material';
import React, { useState } from 'react';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
 
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
     
    }
    
    const handleAdminSubmit = e => {
        e.preventDefault()
        const user = { email };
        fetch('https://aqueous-dusk-98125.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                  
                    setSuccess(true);
                }
                if (!data.matchedCount) {
                    
                    alert(`${email} user not registered yet`)
                   
                }
                if (data.matchedCount & !data.modifiedCount) {
                    
                    alert(`${email} is already admin`)
                  
                }   
               
            })
        
    }
   
    
    return (
        <div style={{marginTop:'5%'}}>
            <h1>Make An Admin</h1>
            {success && <Alert severity="success">Admin Added successfully!</Alert>}
            
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%', color:'black' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
       
        </div>
    );
};

export default MakeAdmin;